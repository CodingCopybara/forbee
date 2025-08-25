// src/main/java/forbee/domain/MilwonApplication.java
package forbee.domain;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "milwon_application")
public class MilwonApplication {

    public enum Status { PENDING, APPROVED, REJECTED }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "applicant_name", nullable = false, length = 100)
    private String applicantName;

    @Column(name = "phone", nullable = false, length = 30)
    private String phone;

    @Column(name = "apiary_address", nullable = false, columnDefinition = "text")
    private String apiaryAddress;

    // 프론트에서 "small|medium|large" 문자열
    @Column(name = "apiary_size", length = 20)
    private String apiarySize;

    @Column(name = "desired_flora", nullable = false, length = 50)
    private String desiredFlora;

    // 프론트가 문자열로 보내니 문자열 유지 (10,20,...)
    @Column(name = "desired_qty", nullable = false, length = 20)
    private String desiredQty;

    @Column(name = "photo_url", columnDefinition = "text")
    private String photoUrl;

    @Column(name = "reason", columnDefinition = "text")
    private String reason;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private Status status = Status.PENDING;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false)
    private OffsetDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private OffsetDateTime updatedAt;

    // --- getters/setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; } // ✅ 컨트롤러에서 호출

    public String getApplicantName() { return applicantName; }
    public void setApplicantName(String applicantName) { this.applicantName = applicantName; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getApiaryAddress() { return apiaryAddress; }
    public void setApiaryAddress(String apiaryAddress) { this.apiaryAddress = apiaryAddress; }

    public String getApiarySize() { return apiarySize; }
    public void setApiarySize(String apiarySize) { this.apiarySize = apiarySize; }

    public String getDesiredFlora() { return desiredFlora; }
    public void setDesiredFlora(String desiredFlora) { this.desiredFlora = desiredFlora; }

    public String getDesiredQty() { return desiredQty; }
    public void setDesiredQty(String desiredQty) { this.desiredQty = desiredQty; }

    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }

    public String getReason() { return reason; }
    public void setReason(String reason) { this.reason = reason; }

    public Status getStatus() { return status; }
    public void setStatus(Status status) { this.status = status; }

    public OffsetDateTime getCreatedAt() { return createdAt; }
    public OffsetDateTime getUpdatedAt() { return updatedAt; }
}
