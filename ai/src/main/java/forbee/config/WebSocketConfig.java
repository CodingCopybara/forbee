package forbee.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // 클라이언트에게 메시지를 보낼 때 사용할 경로의 시작점을 설정합니다.
        // 예를 들어 "/topic/analysis/user123" 같은 주소로 메시지를 보낼 수 있습니다.
        config.enableSimpleBroker("/topic");

        // 클라이언트가 서버로 메시지를 보낼 때 사용할 경로의 시작점을 설정합니다.
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // 프론트엔드에서 WebSocket 연결을 맺을 때 사용할 주소(엔드포인트)를 설정합니다.
        // 예: const socket = new SockJS('/ws');
        registry.addEndpoint("/ws").setAllowedOriginPatterns("*").withSockJS();
    }
}
