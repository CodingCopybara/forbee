package forbee.infra;

import forbee.config.kafka.KafkaProcessor;
import forbee.domain.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
public class MapViewHandler {

    //<<< DDD / CQRS
    @Autowired
    private MapRepository mapRepository;
    //>>> DDD / CQRS
}
