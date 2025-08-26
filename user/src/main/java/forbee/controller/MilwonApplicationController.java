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
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
        log.info("요청 접수됨");

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
        app.setPhotoUrls(req.getPhotoUrls());
        app.setReason(req.getReason());

        // 3) 저장
        var saved = appRepo.save(app);

        return ResponseEntity.ok(Map.of(
            "id", saved.getId().toString(),
            "status", saved.getStatus().name()
        ));
    }

    @GetMapping
    public ResponseEntity<List<MilwonApplication>> getAllApplications() {
        log.info("GET /trees 요청 접수됨");
        List<MilwonApplication> applications = appRepo.findAll();
        return ResponseEntity.ok(applications);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MilwonApplication> getApplicationById(@PathVariable Long id) {
        return appRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<?> approveApplication(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        Optional<MilwonApplication> optionalApp = appRepo.findById(id);
        if (optionalApp.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        MilwonApplication app = optionalApp.get();
        app.setStatus(MilwonApplication.Status.APPROVED);
        app.setProcessMessage(payload.get("processMessage"));
        appRepo.save(app);

        return ResponseEntity.ok(Map.of("status", "APPROVED"));
    }

    @PutMapping("/{id}/deny")
    public ResponseEntity<?> denyApplication(@PathVariable Long id, @RequestBody Map<String, String> payload) {
        Optional<MilwonApplication> optionalApp = appRepo.findById(id);
        if (optionalApp.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        MilwonApplication app = optionalApp.get();
        app.setStatus(MilwonApplication.Status.REJECTED);
        app.setProcessMessage(payload.get("processMessage"));
        appRepo.save(app);

        return ResponseEntity.ok(Map.of("status", "REJECTED"));
    }
}
