package forbee.domain;

import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;
import reactor.core.publisher.EmitterProcessor;

public class AgentResultStream<T> {
    private final Map<Long, EmitterProcessor<T>> processors = new ConcurrentHashMap<>();

    // 구독(Flux) 제공
    public EmitterProcessor<T> getSink(Long userId) {
        return processors.computeIfAbsent(userId, k -> EmitterProcessor.create());
    }

    // 이벤트 전송
    public void emit(Long userId, T data) {
        getSink(userId).onNext(data);
    }
}
