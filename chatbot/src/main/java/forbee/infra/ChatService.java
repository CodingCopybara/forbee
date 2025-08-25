package forbee.infra;

import java.util.function.Consumer;

public interface ChatService {
    void streamAnswer(String question, Consumer<String> onChunk);
}
