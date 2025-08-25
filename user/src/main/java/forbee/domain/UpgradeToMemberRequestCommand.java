package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class UpgradeToMemberRequestCommand {

    private String userId;          // 유저 아이디
    private String address;         // 주소
    private Long career;          // 경력
    private Long hiveCount;          // 보유 벌통 수
    private Long annualProduction; // 연간 생산량
    private List<Document> documents;       // 서류
    private String etc;             // 기타 사항
}
