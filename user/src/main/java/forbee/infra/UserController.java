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
    public User editInfo(@PathVariable(value = "id")  id, @RequestBody EditInfoCommand editInfoCommand, HttpServletRequest request, HttpServletResponse response) throws Exception {
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
    public User withdrawMember(@PathVariable(value = "id")  id, @RequestBody WithdrawMemberCommand withdrawMemberCommand, HttpServletRequest request, HttpServletResponse response) throws Exception {
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
        @RequestBody SignUpCommand signUpCommand) throws Exception {
            System.out.println("##### /user/signUp  called #####");
            User user = new User();
            user.signUp(signUpCommand);
            userRepository.save(user);
            return user;
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
