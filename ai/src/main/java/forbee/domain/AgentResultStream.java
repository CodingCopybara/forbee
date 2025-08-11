package forbee.domain;

import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;
import reactor.core.publisher.EmitterProcessor;

public class AgentResultStream<T> {
    private final Map<String, EmitterProcessor<T>> processors = new ConcurrentHashMap<>();

    // 구독(Flux) 제공
    public EmitterProcessor<T> getSink(String userId) {
        return processors.computeIfAbsent(userId, k -> EmitterProcessor.create());
    }

    // 이벤트 전송
    public void emit(String userId, T data) {
        getSink(userId).onNext(data);
    }
}
