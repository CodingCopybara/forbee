# ─── Build Stage ────────────────────────────────────────────────────────────
FROM maven:3.8.5-openjdk-17-slim AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# ─── Runtime Stage ──────────────────────────────────────────────────────────
FROM openjdk:17-jdk-alpine
WORKDIR /app

# timezone 설정
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 빌드된 JAR만 복사
COPY --from=builder /app/target/*SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-Xmx400M","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar","--spring.profiles.active=docker"]
