// Spring -> FastAPI
package forbee.infra;

import forbee.domain.FastApiService;
import forbee.domain.ImageAnalysisRequest;
import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import java.time.Duration;
import java.util.concurrent.TimeUnit;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;
import reactor.util.retry.Retry;


@Service
public class FastApiServiceImpl implements FastApiService {
    private static final Logger log = LoggerFactory.getLogger(
        FastApiServiceImpl.class
    );

    private final WebClient webClient;

    public FastApiServiceImpl(@Value("${fastapi.url}") String fastApiUrl) {
        HttpClient httpClient = HttpClient
            .create()
            .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)
            .responseTimeout(Duration.ofSeconds(30))
            .doOnConnected(conn ->
                conn.addHandlerLast(new ReadTimeoutHandler(30, TimeUnit.SECONDS))
            );

        this.webClient =
            WebClient
                .builder()
                .baseUrl(fastApiUrl)
                .clientConnector(new ReactorClientHttpConnector(httpClient))
                .build();
    }

    @Override
    public void requestAnalysis(ImageAnalysisRequest request) {
        webClient
            .post()
            .uri("/object-detection")
            .body(Mono.just(request), ImageAnalysisRequest.class)
            .retrieve()
            .bodyToMono(Void.class)
            .retryWhen(
                Retry
                    .backoff(3, Duration.ofSeconds(1))
                    .filter(throwable ->
                        throwable instanceof java.io.IOException
                    )
                    .onRetryExhaustedThrow((retryBackoffSpec, retrySignal) ->
                        retrySignal.failure()
                    )
            )
            .doOnError(error ->
                log.error(
                    "Failed to request analysis from FastAPI for user {}. Reason: {}",
                    request.getUserId(),
                    error.getMessage()
                )
            )
            .subscribe(null, error -> {});
    }
}
