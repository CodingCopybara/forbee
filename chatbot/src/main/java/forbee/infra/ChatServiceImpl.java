package forbee.infra;

import org.springframework.stereotype.Service;

import java.util.function.Consumer;

@Service
public class ChatServiceImpl implements ChatService {

    @Override
    public void streamAnswer(String question, Consumer<String> onChunk) {
        // TODO: 실제 LLM 호출로 교체하세요.
        // 데모: 간단한 텍스트를 조금씩 흘려보냄
        String answer = "안녕하세요! 질문 요약: " + question + " — 도움이 되었으면 합니다.";
        for (int i = 0; i < answer.length(); i++) {
            onChunk.accept(String.valueOf(answer.charAt(i)));
            // 실제 운영에서는 Thread.sleep 피하거나, 비동기 Flux/SSE 등을 고려
            try { Thread.sleep(8); } catch (InterruptedException ignored) {}
        }
    }
}
