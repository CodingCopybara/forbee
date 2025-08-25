package forbee.domain;

import java.util.concurrent.ConcurrentHashMap;
import java.util.Map;
import org.springframework.stereotype.Component;

@Component
public class AgentResultStore<T> {
    private final Map<String, T> store = new ConcurrentHashMap<>();

    public void put(String userId, T result) {
        store.put(userId, result);
    }

    public T get(String userId) {
        return store.get(userId);
    }
}
