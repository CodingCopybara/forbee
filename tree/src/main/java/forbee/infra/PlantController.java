package forbee.infra;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@Transactional
public class PlantController {

    @PostMapping("/plants/predict-bloom")
    public String predictBloom(
        @RequestParam int year,
        @RequestParam String location,
        @RequestParam String species
    ) {
        try {
            String scriptPath = "/workspace/forbee/tree/src/main/model/predict_bloom.py";

            ProcessBuilder pb = new ProcessBuilder(
                "python",
                scriptPath,
                "--year", String.valueOf(year),
                "--location", location,
                "--species", species
            );

            pb.redirectErrorStream(true); // 에러도 표준출력에 합칠지 여부
            Process process = pb.start();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line);
            }

            int exitCode = process.waitFor();
            if (exitCode != 0) {
                return "Python 스크립트 실행 실패: 종료 코드 " + exitCode;
            }

            return output.toString().trim();

        } catch (Exception e) {
            e.printStackTrace();
            return "예측 중 오류 발생: " + e.getMessage();
        }
    }
}
