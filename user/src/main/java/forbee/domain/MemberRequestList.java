package forbee.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.UserApplication;
import java.time.LocalDate;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "MemberRequestList_table")
@Data
//<<< DDD / Aggregate Root
public class MemberRequestList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String userId;

    private String registrationCertificateImage;

    private String state;

    public static MemberRequestListRepository repository() {
        MemberRequestListRepository memberRequestListRepository = UserApplication.applicationContext.getBean(
            MemberRequestListRepository.class
        );
        return memberRequestListRepository;
    }

    //<<< Clean Arch / Port Method
    public void upgradeToMemberRequest(
        UpgradeToMemberRequestCommand upgradeToMemberRequestCommand
    ) {
        //implement business logic here:

        UpgradedToMemberRequest upgradedToMemberRequest = new UpgradedToMemberRequest(
            this
        );
        upgradedToMemberRequest.publishAfterCommit();
    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void requestApproval(RequestApprovalCommand requestApprovalCommand) {
        //implement business logic here:

        RequestApproved requestApproved = new RequestApproved(this);
        requestApproved.publishAfterCommit();
    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void requestDeny(RequestDenyCommand requestDenyCommand) {
        //implement business logic here:

    }
    //>>> Clean Arch / Port Method

}
//>>> DDD / Aggregate Root
