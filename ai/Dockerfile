FROM openjdk:15-jdk-alpine
COPY target/*SNAPSHOT.jar app.jar
EXPOSE 8083
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENTRYPOINT ["java","-Xmx400M","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar","--spring.profiles.active=docker"]


# 수정(JDK(위)에서 JRE(아래)로 변경)
# maven 버전 맞춰서 입력 
# FROM maven:3.9.10-jdk-11 AS builder
# WORKDIR /ai
# COPY pom.xml .
# RUN mvn dependency:go-offline
# COPY src ./src
# # RUN mvn package -DskipTests
# RUN mvn package -B -Dmaven.test.skip=true

# FROM openjdk:15-jre-alpine
# WORKDIR /ai
# COPY --from=builder /ai/target/*-SNAPSHOT.jar app.jar
# EXPOSE 8080
# ENV TZ=Asia/Seoul
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# ENTRYPOINT ["java","-Xmx400M","-Djava.security.egd=file:/dev/./urandom","-jar","app.jar","--spring.profiles.active=docker"]


# docker build -t <이미지 이름> .
# docker run -d -p 8083:8083 --name <컨테이너 이름> <이미지 이름>
