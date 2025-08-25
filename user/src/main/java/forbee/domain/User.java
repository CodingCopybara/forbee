package forbee.domain;

import forbee.UserApplication;
import javax.persistence.*;
import java.util.List;
import lombok.Data;
import java.util.Date;
import java.time.LocalDate;
import java.util.Map;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Collections;


@Entity
@Table(name="User_table")
@Data

//<<< DDD / Aggregate Root
public class User  {

    @Id
    private Long userIdentifier; // oauth 서비스와 동일한 식별자

    @Column(unique = true)
    private String username; // oauth 서비스의 username과 동일

    private String name; // 사용자 이름 (프로필 정보)

    private String phone;

    @Column(nullable = false)
    private String role; // oauth 서비스의 role과 동일

    @PrePersist
    public void prePersist() {
        if (this.role == null) {
            this.role = "USER";
        }
    }

    public static UserRepository repository(){
        UserRepository userRepository = UserApplication.applicationContext.getBean(UserRepository.class);
        return userRepository;
    }



//<<< Clean Arch / Port Method
    public void editInfo(EditInfoCommand editInfoCommand){
        
        //implement business logic here:
        


        EditedInfo editedInfo = new EditedInfo(this);
        editedInfo.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void withdrawMember(WithdrawMemberCommand withdrawMemberCommand){
        
        //implement business logic here:
        


        WithdrawedMember withdrawedMember = new WithdrawedMember(this);
        withdrawedMember.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void signUp(SignUpCommand signUpCommand){
        
        //implement business logic here:
        


        SignedUp signedUp = new SignedUp(this);
        signedUp.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void signIn(SignInCommand signInCommand){
        
        //implement business logic here:
        

        // forbee.external.UserQuery userQuery = new forbee.external.UserQuery();
        // // userQuery.set??()        
        //   = UserApplication.applicationContext
        //     .getBean(forbee.external.Service.class)
        //     .user(userQuery);

        SignedIn signedIn = new SignedIn(this);
        signedIn.publishAfterCommit();
    }



}
//>>> DDD / Aggregate Root