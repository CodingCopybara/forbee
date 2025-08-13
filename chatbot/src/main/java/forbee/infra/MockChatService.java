package forbee.infra;

import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;

@Service
public class MockChatService implements ChatService {
    @Override
    public void streamAnswer(String question, Consumer<String> onChunk) {
        // 데모용: 한 글자씩 타이핑처럼 전송
        String demo = "안녕하세요! 질문 주신 내용은 \"" + question + "\" 입니다. 😊";
        for (char c : demo.toCharArray()) {
            onChunk.accept(String.valueOf(c));
            try { TimeUnit.MILLISECONDS.sleep(10); } catch (InterruptedException ignored) {}
        }
    }
}
