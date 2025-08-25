package forbee.controller;

import forbee.domain.SaveChatRequest;
import forbee.domain.SaveChatResponse;
import forbee.domain.ChatSession;
import forbee.domain.ChatMessage;
import forbee.repository.ChatSessionRepo;
import forbee.repository.ChatMessageRepo;

import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chat-sessions")
public class ChatSessionController {
  private final ChatSessionRepo sessionRepo;
  private final ChatMessageRepo messageRepo;

  public ChatSessionController(ChatSessionRepo s, ChatMessageRepo m){ 
    this.sessionRepo = s; 
    this.messageRepo = m; 
}

  @Transactional
  @PostMapping
  public SaveChatResponse save(@RequestBody SaveChatRequest req,
                               @RequestHeader(value="userId", required=false) String userIdHdr) {
    String userId = (req.getUserId()!=null && !req.getUserId().isEmpty()) ? req.getUserId() : userIdHdr;
    if (userId == null || userId.isBlank()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "userId is required");
    }

    ChatSession session = new ChatSession();
    session.setUserId(userId);
    session = sessionRepo.save(session);

    Long sid = session.getId();
    for (SaveChatRequest.Msg m : req.getMessages()) {
      if ("loading".equals(m.getType())) continue;
      ChatMessage cm = new ChatMessage();
      cm.setSessionId(sid);
      cm.setSender(m.getSender());
      cm.setType(m.getType());
      cm.setText(m.getText());
      cm.setUrl(m.getUrl());
      cm.setTs(m.getTs()!=null ? m.getTs() : System.currentTimeMillis());
      messageRepo.save(cm);
    }
    return new SaveChatResponse(sid);
  }

  @GetMapping("/latest")
  public Map<String, Object> getLatest(@RequestHeader(value="userId", required=false) String userIdHdr) {
    if (userIdHdr == null || userIdHdr.isBlank()) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "userId is required");
    }
    ChatSession s = sessionRepo.findTopByUserIdOrderByCreatedAtDesc(userIdHdr)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "no session"));
    List<ChatMessage> msgs = messageRepo.findBySessionIdOrderByTsAsc(s.getId());
    return Map.of("sessionId", s.getId(), "userId", s.getUserId(), "messages", msgs);
  }
}
