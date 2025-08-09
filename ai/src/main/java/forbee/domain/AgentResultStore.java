package forbee.domain;

import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class AgentResultStore<T> {
    private final Map<Long, T> store = new ConcurrentHashMap<>();

    public void put(Long userId, T result) {
        store.put(userId, result);
    }

    public T get(Long userId) {
        return store.get(userId);
    }
}
