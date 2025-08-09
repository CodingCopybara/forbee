package forbee.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.TreeApplication;
import java.time.LocalDate;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Plant_table")
@Data
//<<< DDD / Aggregate Root
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Polygon location;

    private String plant;

    private Date floweringTime;

    public static PlantRepository repository() {
        PlantRepository plantRepository = TreeApplication.applicationContext.getBean(
            PlantRepository.class
        );
        return plantRepository;
    }
}
//>>> DDD / Aggregate Root
