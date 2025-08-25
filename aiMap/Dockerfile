# Stage 1: Build the Java application
FROM maven:3.6.3-jdk-11 AS builder
WORKDIR /build
COPY pom.xml .
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Create the final hybrid image
FROM openjdk:11-jre-slim

# Install Python and pip
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Python requirements and install dependencies
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy the model and Python scripts
# Note: The 'model' directory from the source will be placed at /app/model in the image.
COPY --from=builder /build/src/main/model ./model

# Copy the built JAR file from the builder stage
COPY --from=builder /build/target/ai-0.0.1-SNAPSHOT.jar app.jar

# Expose port (The application runs on 8081 as per application.yml, but docker-compose will handle mapping)
EXPOSE 8080

# Run the application
# The active profile will be set to 'docker' via docker-compose.
ENTRYPOINT ["java", "-Xms1g", "-Xmx4g", "-jar", "app.jar"]

