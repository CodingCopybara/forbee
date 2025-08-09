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
// @RequestMapping(value="/memberRequestLists")
@Transactional
public class MemberRequestListController {
    @Autowired
    MemberRequestListRepository memberRequestListRepository;

    @RequestMapping(value = "/memberRequestLists/upgradetomemberrequest",
            method = RequestMethod.POST,
            produces = "application/json;charset=UTF-8")
    public MemberRequestList upgradeToMemberRequest(HttpServletRequest request, HttpServletResponse response, 
        @RequestBody UpgradeToMemberRequestCommand upgradeToMemberRequestCommand) throws Exception {
            System.out.println("##### /memberRequestList/upgradeToMemberRequest  called #####");
            MemberRequestList memberRequestList = new MemberRequestList();
            memberRequestList.upgradeToMemberRequest(upgradeToMemberRequestCommand);
            memberRequestListRepository.save(memberRequestList);
            return memberRequestList;
    }
    @RequestMapping(value = "/memberRequestLists/{id}/requestapproval",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8")
    public MemberRequestList requestApproval(@PathVariable(value = "id")  id, @RequestBody RequestApprovalCommand requestApprovalCommand, HttpServletRequest request, HttpServletResponse response) throws Exception {
            System.out.println("##### /memberRequestList/requestApproval  called #####");
            Optional<MemberRequestList> optionalMemberRequestList = memberRequestListRepository.findById(id);
            
            optionalMemberRequestList.orElseThrow(()-> new Exception("No Entity Found"));
            MemberRequestList memberRequestList = optionalMemberRequestList.get();
            memberRequestList.requestApproval(requestApprovalCommand);
            
            memberRequestListRepository.save(memberRequestList);
            return memberRequestList;
            
    }
    @RequestMapping(value = "/memberRequestLists/{id}/requestdeny",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8")
    public MemberRequestList requestDeny(@PathVariable(value = "id")  id, @RequestBody RequestDenyCommand requestDenyCommand, HttpServletRequest request, HttpServletResponse response) throws Exception {
            System.out.println("##### /memberRequestList/requestDeny  called #####");
            Optional<MemberRequestList> optionalMemberRequestList = memberRequestListRepository.findById(id);
            
            optionalMemberRequestList.orElseThrow(()-> new Exception("No Entity Found"));
            MemberRequestList memberRequestList = optionalMemberRequestList.get();
            memberRequestList.requestDeny(requestDenyCommand);
            
            memberRequestListRepository.save(memberRequestList);
            return memberRequestList;
            
    }
}
//>>> Clean Arch / Inbound Adaptor
