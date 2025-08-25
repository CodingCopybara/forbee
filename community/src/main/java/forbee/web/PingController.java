// /workspace/forbee/community/src/main/java/forbee/web/PingController.java
package forbee.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {
  @GetMapping("/ping")
  public String ping() { return "ok"; }
}
