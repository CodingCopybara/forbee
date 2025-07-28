---


# Getting Started

1. Started keycloak
2. Keycloak Setting
3. Gateway Setting
4. Setting Frontend


# 1. Started Keycloak
## Keycloak Docker 환경 <docker-compose.yml>
```
version: '3.8'

services:  
  keycloak:
    container_name: keycloak
    image: quay.io/keycloak/keycloak:18.0.1
    ports:
      - 9090:8080
    environment:
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin
      KEYCLOAK_LOGLEVEL: debug
      KC_METRICS_ENABLED: "true"
      KC_HTTP_ENABLED: "false"
      KC_PROXY: edge
    command:
      - start-dev
```

```
cd keycloak
docker compose up -d
(keycloak port = 9090)
```
    
## Local 설치형 - Download Keycloak
- Linux/Unix & Windows
```
$ curl -LO https://github.com/keycloak/keycloak/releases/download/18.0.1/keycloak-18.0.1.zip
```

- Linux/Unix
```
$ wget https://github.com/keycloak/keycloak/releases/download/18.0.1/keycloak-18.0.1.zip
```


## Unpack keycloak zip
Unpack the ZIP file using the appropriate unzip utility, such as unzip, tar, or Expand-Archive.
```
$ unzip keycloak-18.0.1.zip
or
$ tar -zxvf keycloak-18.0.1.zip
```

## Starting
If you want to make DockerImage, you move Dockerfile to /keycloak-18.0.1 folder.
```
$ cd keycloak-18.0.1/bin
```

### Linux/Unix
```
$ sudo apt-get update
$ sudo apt install openjdk-18-jdk #자바가 설치되어 있지 않다면 Install

$ export KEYCLOAK_ADMIN=admin
$ export KEYCLOAK_ADMIN_PASSWORD=admin

$ sudo -E bin/kc.sh start-dev
```
- Admin User를 생성할 필요 없이, ID=admin / PW=admin 

### Windows
```
$ kc.bat start-dev --http-port=9090
```
- Admin User를 생성해줘야함.


Open http://localhost:9090/ or https://9090-<Gitpod Endpoint> in your web browser.


# 2. Keycloak Setting
## admin 접속
'http://localhost:9090/' or 'https://9090-<Gitpod Endpoint>' 접속 > admin 계정 생성. 
(docker compose up -d -> admin user 생성되어 있음 -> ID:admin / PW:admin)

## Clients setting
1. Client create >  client-id

2. Move to Setting Tab
   
   2-1) Only BackEnd
    - Access Type : Confidential
    - Valid Redirect URIs: Gateway Endpoint URL + /login/oauth2/code/ + ClientId

   2-2) With FrontEnd
    - Access Type : public
    - Root URL :  'https://9090-<gitpod주소>/*'
    - Valid Redirect URIs : 'https://8088-<gitpod주소>/*' (gateway 주소)
    - Web Origins : '*'


- Client Role  

Client tab - 새롭게 생성한 Client click
상단 Roles tab - Add Role - Modeling에서 사용한 Actor와 동일한 이름으로 Role 추가 (대소문자 주의)

## User register
Users Tab 
1. add User > 정보 입력 > 저장
2. 'view all users' 클릭
3. user id 클릭 > Credentials > password 설정 (temporary Off)
4. Role Mappings > Client Roles or Realm Roles 에서 선택하여 mapping

# 3. Gateway Setting
gateway > application.yml 예시

````yaml
keycloak-client:
  server-url: https://9090-uengineysw-shoptestkeyc-atpshpaoszu.ws-us99.gitpod.io
  realm: master
````
- keycloak-client.server-url: Key1cloak port end point
- keycloak-client.realm: Realm name

````yaml
  security:
    oauth2:
      client:
        provider:
          keycloak:
            issuer-uri: ${keycloak-client.server-url}/realms/${keycloak-client.realm}
            user-name-attribute: preferred_username
        registration:
          keycloak:
            client-id: 12stmall
            client-secret: mCJK2sodEkXQWzRtMtPYZHIwgvZxFnwy
            redirect-uri: https://8088-uengineysw-shoptestkeyc-atpshpaoszu.ws-us99.gitpod.io/login/oauth2/code/12stmall
            authorization-grant-type: authorization_code
            scope: openid
      resourceserver:
        jwt:
          jwk-set-uri: ${keycloak-client.server-url}/realms/${keycloak-client.realm}/protocol/openid-connect/certs
````
- clinet-id: keycloak client ID
- client-sercret: Client Tab > 생성한 Client Click > Credentials Tab에서 secret 확인
- redirect-uri: Gateway Endpoint URL + /login/oauth2/code/ + ClientId

# 4. Setting frontend - src - main.js
```
let initOptions = {
  url: 'http://localhost:9090/*' or 'https://9090-<gitpod주소>'
  realm: `master`,
  clientId: `client-id`,
  onLoad: `login-required`,
};
```
    
    
### Keycloak yaml
1. keycloak-service.yaml
```yaml
apiVersion: v1
kind: Service
metadata:
  name: keycloak
  labels:
    app: keycloak
spec:
  ports:
  - name: http
    port: 8080
    targetPort: 8080
  selector:
    app: keycloak
  type: LoadBalancer
```

2. keycloak-deployment.yaml
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
  namespace: default
  labels:
    app: keycloak
spec:
  replicas: 1
  selector:
    matchLabels:
      app: keycloak
  template:
    metadata:
      labels:
        app: keycloak
    spec:
      containers:
      - name: keycloak
        image: quay.io/keycloak/keycloak:15.0.2
        env:
        - name: KEYCLOAK_USER
          value: "admin"
        - name: KEYCLOAK_PASSWORD
          value: "admin"
        - name: PROXY_ADDRESS_FORWARDING
          value: "true"
        ports:
        - name: http
          containerPort: 8080
        - name: https
          containerPort: 8443
        readinessProbe:
          httpGet:
            path: /auth/realms/master
            port: 8080
```
            
#Documentation
https://www.keycloak.org/docs/latest/getting_started/index.html

#vue.js
https://www.keycloak.org/securing-apps/vue

