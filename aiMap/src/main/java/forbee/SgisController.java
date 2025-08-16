package forbee;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicReference;

@CrossOrigin(origins = "*")
@RestController
public class SgisController {

    private static final String CLIENT_ID = "81e5e7f2bafc41a5a506";
    private static final String CLIENT_SECRET = "16f9b16102ca4732946c";

    private static final AtomicReference<String> accessToken = new AtomicReference<>(null);
    private static volatile long tokenExpireTime = 0;

    private final ObjectMapper objectMapper = new ObjectMapper();

    // 리버스 지오코딩
    @GetMapping("/reverse-geocode")
    public ResponseEntity<Map<String, Object>> reverseGeocode(
            @RequestParam("x_coor") double x,
            @RequestParam("y_coor") double y) {
        try {
            System.out.println("[DEBUG] 주소 조회 시작");
            System.out.println("[DEBUG] 입력 좌표 x=" + x + ", y=" + y);

            // 비동기 토큰 갱신 후 API 호출
            String token = getAccessToken().join(); // join으로 완료될 때까지 기다림
            System.out.println("[DEBUG] AccessToken 사용: " + token);

            String apiUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/addr/rgeocode.json?accessToken="
                    + token + "&x_coor=" + x + "&y_coor=" + y;

            System.out.println("[DEBUG] SGIS API URL: " + apiUrl);

            URL url = new URL(apiUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(5000);
            conn.setReadTimeout(5000);

            int responseCode = conn.getResponseCode();
            System.out.println("[DEBUG] SGIS API Response Code: " + responseCode);

            StringBuilder response = new StringBuilder();
            try (BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
                String line;
                while ((line = br.readLine()) != null) {
                    response.append(line);
                }
            }

            System.out.println("[DEBUG] SGIS API Response Body: " + response.toString());

            Map<String, Object> result = objectMapper.readValue(response.toString(), Map.class);
            return ResponseEntity.ok(result);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of(
                    "error", "Internal Server Error",
                    "message", e.getMessage()
            ));
        }
    }

    // 비동기 토큰 발급
    private CompletableFuture<String> getAccessToken() {
        return CompletableFuture.supplyAsync(() -> {
            try {
                long now = System.currentTimeMillis();
                if (accessToken.get() == null || now >= tokenExpireTime) {
                    System.out.println("[DEBUG] 토큰 만료 또는 없음. 새 토큰 발급 시도");

                    String authUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json";
                    URL url = new URL(authUrl);
                    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("POST");                   // POST
                    conn.setRequestProperty("Content-Type", "application/json");
                    conn.setConnectTimeout(5000);
                    conn.setReadTimeout(5000);
                    conn.setDoOutput(true);

                    String body = "{ \"consumer_key\": \"" + CLIENT_ID + "\", \"consumer_secret\": \"" + CLIENT_SECRET + "\" }";
                    try (OutputStream os = conn.getOutputStream()) {
                        os.write(body.getBytes());
                        os.flush();
                    }

                    StringBuilder response = new StringBuilder();
                    try (BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
                        String line;
                        while ((line = br.readLine()) != null) {
                            response.append(line);
                        }
                    }
                    System.out.println("[DEBUG] Auth Response Body: " + response.toString());

                    Map<String, Object> map = objectMapper.readValue(response.toString(), Map.class);
                    String token = (String) map.get("accessToken");
                    accessToken.set(token);
                    tokenExpireTime = now + (60 * 60 * 1000); // 1시간
                    System.out.println("[DEBUG] 새 AccessToken 발급 완료");
                } else {
                    System.out.println("[DEBUG] 기존 AccessToken 사용");
                }
                return accessToken.get();
            } catch (Exception e) {
                throw new RuntimeException("토큰 발급 실패: " + e.getMessage(), e);
            }
        });
    }
}
