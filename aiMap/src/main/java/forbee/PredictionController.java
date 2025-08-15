package forbee;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.MediaType;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;


// import java.util.HashMap;  // ✅ 추가
// import java.util.Map;      // ✅ 추가


// @CrossOrigin(origins = "*")
@RestController
public class PredictionController {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @PostMapping(value = "/predict-and-get-info", consumes = MediaType.ALL_VALUE)
    public ResponseEntity<PredictionResult> predictAndGetInfo(HttpServletRequest request) {
        String inputFilePath = null;

        // try {
        //     System.out.println("[임시모드] 요청 수신 완료");

        //     String sampleBase64 = "data:image/png;base64," +
        //             "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///" +
        //             "38ACfsD/QpZLqAAAAAASUVORK5CYII=";

        //     // ✅ 픽셀 비율 Map (Double로 변경)
        //     Map<String, Double> sampleRatios = new HashMap<>();
        //     sampleRatios.put("기타", 0.10);
        //     sampleRatios.put("건물", 0.05);
        //     sampleRatios.put("주차장", 0.03);
        //     sampleRatios.put("도로", 0.20);
        //     sampleRatios.put("가로수", 0.02);
        //     sampleRatios.put("논", 0.30);
        //     sampleRatios.put("비닐하우스", 0.05);
        //     sampleRatios.put("밭", 0.15);
        //     sampleRatios.put("활엽수림", 0.05);
        //     sampleRatios.put("침엽수림", 0.03);
        //     sampleRatios.put("나지", 0.01);
        //     sampleRatios.put("수역", 0.01);

        //     // ✅ DTO 생성
        //     PredictionResult result = new PredictionResult();
        //     result.setImageData(sampleBase64);
        //     result.setPixelRatios(sampleRatios);

        //     System.out.println("[임시모드] 데이터 반환 완료");
        //     return ResponseEntity.ok(result);

        // } catch (Exception e) {
        //     e.printStackTrace();
        //     return ResponseEntity.status(500).body(null);
        // }

        try (InputStream inputStream = request.getInputStream()) {
            System.out.println("[1] 컨트롤러 진입");

            // 임시 파일 경로 생성
            String fileName = "input_" + UUID.randomUUID() + ".png";
            inputFilePath = System.getProperty("java.io.tmpdir") + File.separator + fileName;
            System.out.println("[2] 임시 파일 경로: " + inputFilePath);

            // 스트림에서 파일 저장
            Files.copy(inputStream, Paths.get(inputFilePath), StandardCopyOption.REPLACE_EXISTING);
            System.out.println("[3] 파일 저장 완료");

            // Python 호출
            String scriptPath = "/workspace/forbee/aiMap/src/main/model/predict.py";
            String modelPath = "/workspace/forbee/aiMap/src/main/model/MODEL.pth";

            ProcessBuilder pb = new ProcessBuilder("python", scriptPath,
                    "--model", modelPath,
                    "--input", inputFilePath);
            
            pb.redirectErrorStream(false); // 에러스트림 별도 처리
            Process process = pb.start();
            System.out.println("[4] Python 프로세스 시작");

            // 표준 출력 읽기
            StringBuilder output = new StringBuilder();
            Thread outputThread = new Thread(() -> {
                try (BufferedReader stdOut = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                    String line;
                    while ((line = stdOut.readLine()) != null) {
                        output.append(line).append("\n");
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
            outputThread.start();

            // 에러 출력 읽기
            StringBuilder errorOutput = new StringBuilder();
            Thread errorThread = new Thread(() -> {
                try (BufferedReader stdErr = new BufferedReader(new InputStreamReader(process.getErrorStream()))) {
                    String line;
                    while ((line = stdErr.readLine()) != null) {
                        errorOutput.append(line).append("\n");
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
            errorThread.start();

            // 프로세스 종료 대기 + 출력 스레드 종료 대기
            int exitCode = process.waitFor();
            outputThread.join();
            errorThread.join();

            System.out.println("[5] Python 종료 코드: " + exitCode);

            if (exitCode != 0) {
                System.err.println("Python error output:\n" + errorOutput.toString());
                return ResponseEntity.status(500).body(null);
            }

            // JSON 파싱
            String jsonOutput = output.toString().trim();
            System.out.println("[6] Python 출력(JSON): " + jsonOutput);

            PredictionResult result = objectMapper.readValue(jsonOutput, PredictionResult.class);
            System.out.println("[7] JSON 파싱 완료");

            return ResponseEntity.ok(result);

        } catch (Exception e) {
            System.err.println("[예외 발생]");
            e.printStackTrace();
            return ResponseEntity.status(500).body(null);
        } finally {
            if (inputFilePath != null) {
                boolean deleted = new File(inputFilePath).delete();
                System.out.println("[정리] 임시 파일 삭제: " + deleted);
            }
        }
    }
}
