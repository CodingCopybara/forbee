// src/main/java/forbee/domain/MilwonApplicationCreateRequest.java
package forbee.domain;

import lombok.Data;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;

@Data
public class MilwonApplicationCreateRequest {

    // ✅ 프론트가 넣어주는 로그인 이메일(=username)
    @NotBlank
    private String username;

    @NotBlank
    private String applicantName;

    @NotBlank
    private String phone;

    @NotBlank
    private String apiaryAddress;

    // 선택값이면 @NotBlank 제거
    private String apiarySize;       // "small" | "medium" | "large" (문자열로 받는다면 String)

    @NotBlank
    private String desiredFlora;     // "아카시아" 등

    @NotNull
    private String desiredQty;

    private String photoUrl;
    private String reason;

    // getters/setters ...
    public String getApplicantName() { return applicantName; }
    public void setApplicantName(String v) { this.applicantName = v; }
    public String getPhone() { return phone; }
    public void setPhone(String v) { this.phone = v; }
    public String getApiaryAddress() { return apiaryAddress; }
    public void setApiaryAddress(String v) { this.apiaryAddress = v; }
    public String getApiarySize() { return apiarySize; }
    public void setApiarySize(String v) { this.apiarySize = v; }
    public String getDesiredFlora() { return desiredFlora; }
    public void setDesiredFlora(String v) { this.desiredFlora = v; }
    public String getDesiredQty() { return desiredQty; }
    public void setDesiredQty(String v) { this.desiredQty = v; }
    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String v) { this.photoUrl = v; }
    public String getReason() { return reason; }
    public void setReason(String v) { this.reason = v; }
}
