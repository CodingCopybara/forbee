package forbee.infra;
import forbee.domain.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

//<<< Clean Arch / Inbound Adaptor

@RestController
// @RequestMapping(value="/users")
@Transactional
public class UserController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/users/{id}/editinfo",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8")
    public User editInfo(@PathVariable(value = "id") Long id, @RequestBody EditInfoCommand editInfoCommand, HttpServletRequest request, HttpServletResponse response) throws Exception {
            System.out.println("##### /user/editInfo  called #####");
            Optional<User> optionalUser = userRepository.findById(id);
            
            optionalUser.orElseThrow(()-> new Exception("No Entity Found"));
            User user = optionalUser.get();
            user.editInfo(editInfoCommand);
            
            userRepository.save(user);
            return user;
            
    }
    @RequestMapping(value = "/users/{id}/withdrawmember",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8")
    public User withdrawMember(@PathVariable(value = "id") Long id, @RequestBody WithdrawMemberCommand withdrawMemberCommand, HttpServletRequest request, HttpServletResponse response) throws Exception {
            System.out.println("##### /user/withdrawMember  called #####");
            Optional<User> optionalUser = userRepository.findById(id);
            
            optionalUser.orElseThrow(()-> new Exception("No Entity Found"));
            User user = optionalUser.get();
            user.withdrawMember(withdrawMemberCommand);
            
            userRepository.save(user);
            return user;
            
    }
    @RequestMapping(value = "/users/signup",
            method = RequestMethod.POST,
            produces = "application/json;charset=UTF-8")
    public User signUp(HttpServletRequest request, HttpServletResponse response,
        @RequestBody User userProfile) throws Exception { // SignUpCommand 대신 User 객체를 받음
            System.out.println("##### /user/signUp (from oauth) called #####");

            // userIdentifier가 이미 존재하는지 확인
            if (userRepository.findById(userProfile.getUserIdentifier()).isPresent()) {
                throw new Exception("User profile with this identifier already exists!");
            }
            // email이 이미 존재하는지 확인
            if (userRepository.findByUsername(userProfile.getUsername()) != null) {
                throw new Exception("User profile with this username already exists!");
            }

            // 받은 userProfile 객체를 그대로 저장
            userProfile.setName(userProfile.getName()); // name 필드 설정
            userProfile.setPhone(userProfile.getPhone());
            userRepository.save(userProfile);
            return userProfile;
    }
    @RequestMapping(value = "/users/signin",
            method = RequestMethod.POST,
            produces = "application/json;charset=UTF-8")
    public User signIn(HttpServletRequest request, HttpServletResponse response, 
        @RequestBody SignInCommand signInCommand) throws Exception {
            System.out.println("##### /user/signIn  called #####");
            User user = new User();
            user.signIn(signInCommand);
            userRepository.save(user);
            return user;
    }
}
//>>> Clean Arch / Inbound Adaptor
