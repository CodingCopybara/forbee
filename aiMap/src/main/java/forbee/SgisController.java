package forbee;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicReference;

// @CrossOrigin(origins = "*")
@RestController
public class SgisController {

    @Value("${sgis.api.consumer-key}")
    private String clientId;
    @Value("${sgis.api.secret-key}")
    private String clientSecret;

    private static final AtomicReference<String> accessToken = new AtomicReference<>(null);
    private static volatile long tokenExpireTime = 0;

    private final ObjectMapper objectMapper = new ObjectMapper();

    // 리버스 지오코딩
    @GetMapping("/maps/reverse-geocode")
    public ResponseEntity<Map<String, Object>> reverseGeocode(
            @RequestParam("x_coor") double x,
            @RequestParam("y_coor") double y) {
        try {
            System.out.println("[1] 주소 조회 시작");
            System.out.println("[1] 입력 좌표 x=" + x + ", y=" + y);

            // 비동기 토큰 갱신 후 API 호출
            String token = getAccessToken().join(); // join으로 완료될 때까지 기다림
            System.out.println("[3] AccessToken 사용: " + token);

            String apiUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/addr/rgeocode.json?accessToken="
                    + token + "&x_coor=" + x + "&y_coor=" + y;

            System.out.println("[4] SGIS API URL: " + apiUrl);

            URL url = new URL(apiUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(5000);
            conn.setReadTimeout(5000);

            int responseCode = conn.getResponseCode();
            System.out.println("[5] SGIS API Response Code: " + responseCode);

            StringBuilder response = new StringBuilder();
            try (BufferedReader br = new BufferedReader(
                    new InputStreamReader(conn.getInputStream(), "UTF-8"))) {
                String line;
                while ((line = br.readLine()) != null) {
                    response.append(line);
                }
            }

            System.out.println("[6] SGIS API Response Body: " + response.toString());

            Map<String, Object> result = objectMapper.readValue(response.toString(), Map.class);
            String addr = null;

            if ((Integer) result.get("errCd") == 0) {
                List<Map<String, Object>> results = (List<Map<String, Object>>) result.get("result");
                if (results != null && !results.isEmpty()) {
                    Map<String, Object> first = results.get(0);
                    addr = (String) first.get("full_addr");
                    if (addr == null || addr.isEmpty()) {
                        String sido = (String) first.get("sido_nm");
                        String sgg = (String) first.get("sgg_nm");
                        String emd = (String) first.get("emd_nm"); 
                        if (sido != null && sgg != null && emd != null) {
                            addr = sido + " " + sgg + " " + emd;
                        } else if (sido != null && sgg != null) {
                            addr = sido + " " + sgg;
                        }
                    }
                }
            }
            if (addr == null || addr.isEmpty()) {
                addr = "주소를 찾을 수 없습니다.";
            }

            return ResponseEntity.ok(Map.of("full_addr", addr));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(Map.of(
                    "error", "Internal Server Error",
                    "message", e.getMessage()
            ));
        }
    }

    // // 주소 검색
    // @GetMapping("/maps/search-address")
    // public ResponseEntity<Map<String, Object>> searchAddress(
    //         @RequestParam("query") String query) {
    //     try {
    //         System.out.println("[1] 주소 검색 시작: " + query);

    //         // SGIS 주소검색 API 호출
    //         String token = getAccessToken().join();
    //         System.out.println("[2] AccessToken 사용: " + token);

    //         String apiUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/addr/geocode.json"
    //                             + "?accessToken=" + token
    //                             + "&address=" + java.net.URLEncoder.encode(query, "UTF-8")
    //                             + "&resultcount=5";


    //         System.out.println("[3] SGIS API URL: " + apiUrl);

    //         URL url = new URL(apiUrl);
    //         HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    //         conn.setRequestMethod("GET");
    //         conn.setConnectTimeout(5000);
    //         conn.setReadTimeout(5000);

    //         int responseCode = conn.getResponseCode();
    //         System.out.println("[4] SGIS API Response Code: " + responseCode);

    //         StringBuilder response = new StringBuilder();
    //         try (BufferedReader br = new BufferedReader(
    //                 new InputStreamReader(conn.getInputStream(), "UTF-8"))) {
    //             String line;
    //             while ((line = br.readLine()) != null) {
    //                 response.append(line);
    //             }
    //         }

    //         System.out.println("[5] SGIS API Response Body: " + response.toString());
            
    //         Map<String, Object> result = objectMapper.readValue(response.toString(), Map.class);
    //         Map<String, Object> resultMap = (Map<String, Object>) result.get("result");
    //         List<Map<String, Object>> results = (List<Map<String, Object>>) resultMap.get("resultdata");

    //         Double x = null, y = null;
    //         if (results != null && !results.isEmpty()) {
    //             Map<String, Object> first = results.get(0);
    //             x = Double.valueOf(first.get("x").toString());
    //             y = Double.valueOf(first.get("y").toString());
    //         }

    //         if (x == null || y == null) {
    //             System.out.println("[7] 검색 결과 없음");
    //             return ResponseEntity.ok(Map.of("message", "검색 결과가 없습니다."));
    //         }

    //         return ResponseEntity.ok(Map.of("x", x, "y", y));

    //     } catch (Exception e) {
    //         e.printStackTrace();
    //         return ResponseEntity.status(500).body(Map.of(
    //                 "error", "Internal Server Error",
    //                 "message", e.getMessage()
    //         ));
    //     }
    // }

    // 비동기 토큰 발급
    private CompletableFuture<String> getAccessToken() {
        return CompletableFuture.supplyAsync(() -> {
            try {
                long now = System.currentTimeMillis();
                if (accessToken.get() == null || now >= tokenExpireTime) {
                    System.out.println("[1] 토큰 만료 또는 없음. 새 토큰 발급 시도");

                    // 인증 API URL (GET 방식)
                    String authUrl = "https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json"
                            + "?consumer_key=" + clientId
                            + "&consumer_secret=" + clientSecret;

                    URL url = new URL(authUrl);
                    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                    conn.setRequestMethod("GET");
                    conn.setConnectTimeout(5000);
                    conn.setReadTimeout(5000);

                    StringBuilder response = new StringBuilder();
                    try (BufferedReader br = new BufferedReader(
                            new InputStreamReader(conn.getInputStream(), "UTF-8"))) {
                        String line;
                        while ((line = br.readLine()) != null) {
                            response.append(line);
                        }
                    }
                    System.out.println("[2] Auth Response Body: " + response.toString());

                    // JSON 파싱: result.accessToken 가져오기
                    Map<String, Object> map = objectMapper.readValue(response.toString(), Map.class);
                    Map<String, Object> resultMap = (Map<String, Object>) map.get("result");
                    String token = (String) resultMap.get("accessToken");

                    // 토큰 저장 및 만료 시간 설정 (1시간)
                    accessToken.set(token);
                    tokenExpireTime = now + (60 * 60 * 1000);
                    System.out.println("[3] 새 AccessToken 발급 완료: " + token);
                } else {
                    System.out.println("[3] 기존 AccessToken 사용: " + accessToken.get());
                }
                return accessToken.get();
            } catch (Exception e) {
                throw new RuntimeException("토큰 발급 실패: " + e.getMessage(), e);
            }
        });
    }
}
