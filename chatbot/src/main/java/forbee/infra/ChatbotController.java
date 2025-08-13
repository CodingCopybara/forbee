package forbee.infra;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.domain.ChatSave;
import forbee.domain.ChatbotRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.function.Consumer;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatbotController {
    
    @Qualifier("chatServiceImpl")
    
    private final ChatbotRepository chatSaveRepository; // ✅ ChatSave 전용 리포지토리
    private final ChatService chatService;               // ✅ 스트리밍 답변 서비스
    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * 로그인 안 했으면(= Authorization 없거나 payload에 username 없음) 아무것도 저장하지 않음.
     * 응답은 chunk로 흘려보냄.
     */
    @PostMapping(
        value = "/stream",
        produces = MediaType.APPLICATION_OCTET_STREAM_VALUE
    )
    public ResponseEntity<StreamingResponseBody> stream(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody ChatRequest req
    ) {
        final JwtUser user = parseJwtUser(authorization);      // null이면 비로그인 취급
        final String question = req.getQuestion();
        final StringBuilder answerBuf = new StringBuilder();

        StreamingResponseBody body = outputStream -> {
            // chunk 도착할 때마다 흘려보내고, answerBuf 에 누적
            Consumer<String> onChunk = chunk -> {
                try {
                    outputStream.write(chunk.getBytes(StandardCharsets.UTF_8));
                    outputStream.flush();
                } catch (Exception ignored) {}
                answerBuf.append(chunk);
            };

            // 실제 답변 스트리밍 (필요 시 지연/스트리밍 구현은 ChatService에서)
            chatService.streamAnswer(question, onChunk);

            // ✅ 로그인한 경우에만 DB 저장
            if (user != null && user.getUsername() != null && !user.getUsername().isBlank()) {
                ChatSave cs = new ChatSave();
                cs.setUserId(user.getUserId());
                cs.setUsername(user.getUsername());
                cs.setRole(user.getRole());
                cs.setQuestion(question);
                cs.setAnswer(answerBuf.toString());
                chatSaveRepository.save(cs);
            }
        };

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(body);
    }

    /* ===== JWT payload 가벼운 파싱(검증 없음) ===== */
    private JwtUser parseJwtUser(String authorization) {
        try {
            if (authorization == null || !authorization.startsWith("Bearer ")) return null;
            String jwt = authorization.substring("Bearer ".length()).trim();
            String[] parts = jwt.split("\\.");
            if (parts.length < 2) return null;

            String payloadJson = new String(Base64.getUrlDecoder().decode(parts[1]), StandardCharsets.UTF_8);
            JsonNode node = objectMapper.readTree(payloadJson);

            String username = firstText(node, "username", "user_name", "preferred_username", "sub");
            String userId   = firstText(node, "userIdentifier", "user_id");
            if (userId == null) userId = username;

            String role = null;
            if (node.has("authorities") && node.get("authorities").isArray() && node.get("authorities").size() > 0) {
                role = node.get("authorities").get(0).asText();
            } else if (node.has("role")) {
                role = node.get("role").asText();
            }

            if (username == null || username.isBlank()) return null; // username 없으면 비로그인 취급
            return new JwtUser(userId, username, role);
        } catch (Exception e) {
            return null; // 파싱 실패 시 비로그인 취급
        }
    }

    private String firstText(JsonNode node, String... keys) {
        for (String k : keys) {
            if (node.hasNonNull(k)) return node.get(k).asText();
        }
        return null;
    }

    /* ===== 내부 DTO ===== */
    public static class ChatRequest {
        private String question;
        public String getQuestion() { return question; }
        public void setQuestion(String question) { this.question = question; }
    }

    public static class JwtUser {
        private final String userId;
        private final String username;
        private final String role;
        public JwtUser(String userId, String username, String role) {
            this.userId = userId; this.username = username; this.role = role;
        }
        public String getUserId() { return userId; }
        public String getUsername() { return username; }
        public String getRole() { return role; }
    }
}
