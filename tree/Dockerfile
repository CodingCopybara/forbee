FROM openjdk:15-jdk-slim

RUN sed -i 's|deb.debian.org|archive.debian.org|g' /etc/apt/sources.list \
 && sed -i '/security.debian.org/d' /etc/apt/sources.list \
 && apt-get update && apt-get install -y \
        python3 python3-pip python3-dev build-essential libhdf5-dev libhdf5-serial-dev pkg-config libblas-dev liblapack-dev gfortran \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY target/*SNAPSHOT.jar app.jar
COPY requirements.txt /app/requirements.txt

RUN pip3 install --no-cache-dir --only-binary :all: -r /app/requirements.txt

COPY src/main/model /app/model

EXPOSE 8080
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENTRYPOINT ["java","-Xmx400M","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar","--spring.profiles.active=docker"]