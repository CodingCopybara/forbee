package forbee.domain;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

//<<< EDA / CQRS
@Entity
@Table(name = "Map_table")
@Data
public class Map {

    @Id
    //@GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String riskLevel;
    private String location;
    private String plant;
    private Double density;
}
