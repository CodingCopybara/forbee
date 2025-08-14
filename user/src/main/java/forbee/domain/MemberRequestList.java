package forbee.domain;

import forbee.UserApplication;
import java.time.LocalDateTime;
import javax.persistence.*;
import javax.persistence.Lob;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "MemberRequestList_table")
@Data
@EntityListeners(AuditingEntityListener.class) // JPA Auditing 리스너 추가
public class MemberRequestList {

    

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String userId;          // 유저 아이디

    private String address;         // 주소

    private String career;          // 경력

    private Long hiveCount;          // 보유 벌통 수

    private Long annualProduction; // 연간 생산량

    private String documents;       // 서류

    @Lob
    private String etc;             // 기타 사항

    @Enumerated(EnumType.STRING) // Enum 값을 DB에 문자열로 저장
    private Status status = Status.PENDING; // 기본값을 PENDING으로 설정

    @CreatedDate // 엔티티 생성 시 시간 자동 저장
    private LocalDateTime createdAt;     // 요청일 (타입 변경)

    private String processMessage;  // 처리 메시지

    public static MemberRequestListRepository repository() {
        MemberRequestListRepository memberRequestListRepository = UserApplication.applicationContext.getBean(
            MemberRequestListRepository.class
        );
        return memberRequestListRepository;
    }

    public void upgradeToMemberRequest(
        UpgradeToMemberRequestCommand upgradeToMemberRequestCommand
    ) {
        // Command 객체에서 받은 값으로 Entity의 필드를 채웁니다.
        this.setUserId(upgradeToMemberRequestCommand.getUserId());
        this.setAddress(upgradeToMemberRequestCommand.getAddress());
        this.setCareer(upgradeToMemberRequestCommand.getCareer());
        this.setHiveCount(upgradeToMemberRequestCommand.getHiveCount());
        this.setAnnualProduction(upgradeToMemberRequestCommand.getAnnualProduction());
        this.setDocuments(upgradeToMemberRequestCommand.getDocuments());
        this.setEtc(upgradeToMemberRequestCommand.getEtc());

        // 이벤트 발행
        UpgradedToMemberRequest upgradedToMemberRequest = new UpgradedToMemberRequest(
            this
        );
        upgradedToMemberRequest.publishAfterCommit();
    }

    public void requestApproval(RequestApprovalCommand requestApprovalCommand) {
        //implement business logic here:

        RequestApproved requestApproved = new RequestApproved(this);
        requestApproved.publishAfterCommit();
    }

    public void requestDeny(RequestDenyCommand requestDenyCommand) {
        //implement business logic here:

    }

}