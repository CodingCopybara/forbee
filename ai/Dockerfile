FROM openjdk:15-jdk-alpine
COPY target/*SNAPSHOT.jar app.jar
EXPOSE 8080
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENTRYPOINT ["java","-Xmx400M","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar","--spring.profiles.active=docker"]

FROM python:3.9
WORKDIR /usr/src
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8003"]
