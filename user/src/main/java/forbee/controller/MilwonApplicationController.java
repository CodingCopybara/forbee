package forbee.controller;

import forbee.domain.MilwonApplication;
import forbee.domain.MilwonApplicationCreateRequest;
import forbee.domain.MilwonApplicationRepository;
import forbee.domain.User;
import forbee.domain.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/trees")
public class MilwonApplicationController {

    private static final Logger log = LoggerFactory.getLogger(MilwonApplicationController.class);

    private final MilwonApplicationRepository appRepo;
    private final UserRepository userRepo;

    public MilwonApplicationController(MilwonApplicationRepository appRepo, UserRepository userRepo) {
        this.appRepo = appRepo;
        this.userRepo = userRepo;
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody MilwonApplicationCreateRequest req) {

        // 1) 프론트가 보낸 username(=email)으로 유저 조회
        String username = req.getUsername();
        User user = userRepo.findByUsername(username);
        if (user == null) {
            log.warn("User not found by username(email)={}", username);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User not found");
        }

        // 2) 엔티티 매핑
        MilwonApplication app = new MilwonApplication();
        app.setUserId(user.getUserIdentifier()); // FK로 숫자 저장 (User.userIdentifier)
        app.setApplicantName(req.getApplicantName());
        app.setPhone(req.getPhone());
        app.setApiaryAddress(req.getApiaryAddress());
        app.setApiarySize(req.getApiarySize());
        app.setDesiredFlora(req.getDesiredFlora());
        app.setDesiredQty(req.getDesiredQty());
        app.setPhotoUrl(req.getPhotoUrl());
        app.setReason(req.getReason());

        // 3) 저장
        var saved = appRepo.save(app);

        return ResponseEntity.ok(Map.of(
            "id", saved.getId().toString(),
            "status", saved.getStatus().name()
        ));
    }
}
