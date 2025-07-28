# 

## Model
www.msaez.io/#/139742584/storming/c765c71a0e7853b9800ee174e308cbe4

## Before Running Services
### Make sure there is a Kafka server running
```
cd kafka
docker-compose up
```
- Check the Kafka messages:
```
cd infra
docker-compose exec -it kafka /bin/bash
cd /bin
./kafka-console-consumer --bootstrap-server localhost:9092 --topic
```

## Run the backend micro-services
See the README.md files inside the each microservices directory:

- community
- tree
- user
- dashboard
- chatbot
- ai


## Run API Gateway (Spring Gateway)
```
cd gateway
mvn spring-boot:run
```

## Test by API
- community
```
 http :8088/posts id="id"userId="userId"title="title"content="content"view="view"image="image"createdAt="createdAt"updatedAt="updatedAt"
 http :8088/comments id="id"postId="postId"userId="userId"content="content"createdAt="createdAt"updatedAt="updatedAt"
 http :8088/ 
 http :8088/ 
```
- tree
```
 http :8088/plants id="id"plant="plant"floweringTime="floweringTime"
```
- user
```
 http :8088/users id="id"email="email"name="name"password="password"
 http :8088/memberRequestLists id="id"userId="userId"registrationCertificateImage="registrationCertificateImage"state="state"
```
- dashboard
```
```
- chatbot
```
 http :8088/chatbots id="id"requestTime="requestTime"
```
- ai
```
 http :8088/ 
 http :8088/ 
```


## Run the frontend
```
cd frontend
npm i
npm run serve
```

## Test by UI
Open a browser to localhost:8088

## Required Utilities

- httpie (alternative for curl / POSTMAN) and network utils
```
sudo apt-get update
sudo apt-get install net-tools
sudo apt install iputils-ping
pip install httpie
```

- kubernetes utilities (kubectl)
```
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

- aws cli (aws)
```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

- eksctl 
```
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
```
