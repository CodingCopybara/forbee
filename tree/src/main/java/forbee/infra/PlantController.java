package forbee.infra;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.ArrayList; 
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.web.bind.annotation.*;

import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvException;


@CrossOrigin(origins = "*")
@RestController
@Transactional
public class PlantController {
    private String getPreviousYearBloomDate(String species, String location, int year) {
        String previousYearBloomDate = "전년도 개화 데이터 없음";
        String csvFilePath = "/workspace/forbee/tree/src/main/model/data/" + species + ".csv";
        
        System.out.println("1. Starting getPreviousYearBloomDate...");
        System.out.println("2. CSV file path: " + csvFilePath);

        try (CSVReader reader = new CSVReaderBuilder(new FileReader(csvFilePath))
                .withSkipLines(0)
                .build()) {

            List<String[]> allRows = reader.readAll();
            System.out.println("3. Successfully read CSV. Total rows: " + allRows.size());

            if (allRows.size() > 0) {
                String[] header = allRows.get(0);

                // System.out.println("Header row:");
                // for (String h : header) {
                //     System.out.println("[" + h + "]");
                // }

                final int locationIndex = findHeaderIndex(header, "location");
                final int yearIndex = findHeaderIndex(header, "year");
                final int bloomDateIndex = findHeaderIndex(header, "bloom_date");
                System.out.println("4. Header indexes: locationIndex=" + locationIndex + ", yearIndex=" + yearIndex + ", bloomDateIndex=" + bloomDateIndex);

                if (locationIndex != -1 && yearIndex != -1 && bloomDateIndex != -1) {
                    String targetLocation = "South Korea/" + location;
                    int targetYear = year - 1;
                    System.out.println("5. Searching for: location=" + targetLocation + ", year=" + targetYear);

                    Optional<String[]> foundRow = allRows.stream()
                            .skip(1)
                            .filter(row -> row.length > Math.max(locationIndex, Math.max(yearIndex, bloomDateIndex)))
                            .filter(row -> row[locationIndex].trim().replace("\"", "").equals(targetLocation))
                            .filter(row -> {
                                try {
                                    return Integer.parseInt(row[yearIndex].trim().replace("\"", "")) == targetYear;
                                } catch (NumberFormatException e) {
                                    return false;
                                }
                            })
                            .findFirst();

                    if (foundRow.isPresent()) {
                        previousYearBloomDate = foundRow.get()[bloomDateIndex].trim().replace("\"", "");
                        System.out.println("6. Found matching row! Previous year bloom date: " + previousYearBloomDate);
                    } else {
                        System.out.println("6. No matching row found.");
                    }
                } else {
                    System.out.println("4. ERROR: Header columns not found.");
                }
            } else {
                System.out.println("3. ERROR: CSV file is empty.");
            }

        } catch (IOException | CsvException e) {
            System.err.println("2. ERROR: Failed to read CSV file: " + e.getMessage());
            e.printStackTrace();
        }

        System.out.println("7. Returning previousYearBloomDate: " + previousYearBloomDate);
        return previousYearBloomDate;
    }

    private int findHeaderIndex(String[] header, String headerName) {
        for (int i = 0; i < header.length; i++) {
            String cleanHeader = header[i].trim().replace("\"", "");
            if (cleanHeader.startsWith("\uFEFF")) { // BOM 제거
                cleanHeader = cleanHeader.substring(1);
            }
            if (cleanHeader.equals(headerName)) {
                return i;
            }
        }
        return -1;
    }

    @PostMapping("/plants/predict-bloom")
    public BloomPredictionResponse predictBloom(
        @RequestParam int year,
        @RequestParam String location,
        @RequestParam String species
    ) {
        String previousYearBloomDate = getPreviousYearBloomDate(species, location, year);

        try {
            String scriptPath = "/workspace/forbee/tree/src/main/model/predict_bloom.py";

            ProcessBuilder pb = new ProcessBuilder(
                "python",
                scriptPath,
                "--year", String.valueOf(year),
                "--location", location,
                "--species", species
            );

            pb.redirectErrorStream(true);
            Process process = pb.start();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            StringBuilder output = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                output.append(line);
            }

            int exitCode = process.waitFor();
            if (exitCode != 0) {
                System.out.println("Python script failed to execute.");
                return new BloomPredictionResponse(
                    "fail",
                    "N/A",
                    0.0,
                    "N/A",
                    "N/A",
                    "N/A",
                    previousYearBloomDate 
                );
            }

            String jsonOutput = output.toString().trim();
            String predictedDate = jsonOutput; 

            Double confidence = 0.0;
            String temperature = "N/A";
            String humidity = "N/A";
            String windSpeed = "N/A";

            if (predictedDate.contains("예측 불가") || predictedDate.contains("개화 없음")) {
                System.out.println("Prediction from Python script is '예측 불가' or '개화 없음'.");
                return new BloomPredictionResponse(
                    "fail",
                    predictedDate,
                    0.0,
                    "N/A",
                    "N/A",
                    "N/A",
                    previousYearBloomDate
                );
            }

            return new BloomPredictionResponse(
                "success",
                predictedDate,
                confidence,
                temperature,
                humidity,
                windSpeed,
                previousYearBloomDate
            );

        } catch (Exception e) {
            e.printStackTrace();
            return new BloomPredictionResponse(
                "fail",
                "N/A",
                0.0,
                "N/A",
                "N/A",
                "N/A",
                previousYearBloomDate
            );
        }
    }
}