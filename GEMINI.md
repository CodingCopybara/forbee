# Project Summary: Forbee - JWT Authentication and User Profile Separation

This document summarizes the modifications made to the `forbee` microservices project, focusing on implementing JWT authentication and separating user profile data between the `oauth` and `user` services.

## Objective
The primary goal was to establish a robust JWT authentication flow, where the `oauth` service acts as the Authorization Server (issuing JWTs), the `gateway` service acts as a JWT Resource Server (validating JWTs), and the `user` service manages user profile data, distinct from the authentication credentials.

## Database Migration to Azure MySQL
Both the `oauth` and `user` services were migrated from the in-memory H2 database to a shared Azure MySQL server. This provides persistent storage and a more realistic production-like environment.

*   **New Schemas**: Created `oauth` and `user` schemas on the Azure MySQL instance.
*   **Configuration**: Updated `application.yml` files in both services to connect to the Azure MySQL database.
*   **Secrets Management**: Database passwords are not hardcoded. They are loaded from an environment variable (`DB_PASSWORD`), making the configuration secure and portable, especially for deployment environments like Kubernetes.
*   **Persistent Data**: Changed `spring.jpa.hibernate.ddl-auto` property from `create` to `update` to ensure data persistence across application restarts.
*   **Dependencies**: Replaced H2 database dependencies with `mysql-connector-java` in the `pom.xml` of both services.
*   **SSL Configuration**: Initially encountered SSL connection errors (`require_secure_transport=ON`). This was resolved by disabling the SSL requirement on the Azure MySQL server for the development environment.

## Service-Specific Changes

### `oauth` Service (Authorization Server, JWT Issuer)
*   **Role**: Responsible for user authentication, JWT issuance, and managing core authentication credentials (email, hashed password, user identifier).
*   **Key Changes**:
    *   **Database**: Migrated from H2 to Azure MySQL (`oauth` schema).
    *   **JWT Signing Key**: Generated `server.jks` using `keytool` and placed it in `src/main/resources` for JWT signing.
    *   **Lombok Version**: Updated Lombok dependency to `1.18.30` in `pom.xml` to address potential compatibility issues.
    *   **`User.java` Entity**:
        *   Modified `@Id` field from `username` to `email` (and back to `username` for `UserDetails` compatibility).
        *   Removed `role`, `nickName`, `address` fields.
        *   Ensured `getUsername()` returns the `username` field and `setUsername()` sets the `username` field, aligning with `UserDetails` interface.
        *   `userIdentifier` field type is `Long`.
    *   **`UserRepository.java`**: Changed `findByEmail` to `findByUsername` to align with `User` entity changes.
    *   **`RegistrationRequestDto.java` (New)**:
        *   Created `src/main/java/com/example/template/controller/RegistrationRequestDto.java` to accept `email`, `password`, `userIdentifier`, and `name` during registration.
    *   **`UserProfileDto.java` (New)**:
        *   Created `src/main/java/com/example/template/controller/UserProfileDto.java` to specifically transfer `userIdentifier`, `username`, and `name` to the `user` service.
    *   **`UserController.java`**:
        *   Modified `registerUser` method to accept `RegistrationRequestDto`.
        *   Used `registrationDto.getEmail()` for `username` and `registrationDto.getName()` for the user's name.
        *   Created `UserProfileDto` to send `userIdentifier`, `username`, and `name` to the `user` service.
        *   Removed `userProfileForUserService.setName()` call as `oauth`'s `User` entity does not have a `name` field.
        *   Hardcoded `user` service URL (`http://localhost:8084/users/signup`) for inter-service communication (temporary workaround for `@Value` issue).
    *   **`WebSecurityConfig.java`**: Configured Spring Security to permit all requests to `/api/users/register` and `/oauth/token` endpoints.
    *   **`OAuth2AuthorizationServerConfig.java`**: Restored custom `accessDeniedHandler` and `authenticationEntryPoint`. Removed `nickname` and `address` from `TokenEnhancer`.
    *   **`AuthorizationServerApplication.java`**: Updated `CommandLineRunner` to use `setUsername` and removed `setNickName`, `setAddress`, `setRole` calls.
    *   **`application.yml`**: Changed `ddl-auto` to `update` for data persistence. Removed `user-service.url` property due to persistent `@Value` resolution issues (temporary workaround).

### `user` Service (User Profile Management)
*   **Role**: Responsible for storing and managing detailed user profile information, identified by the `userIdentifier` from the `oauth` service.
*   **Key Changes**:
    *   **Database**: Migrated from H2 to Azure MySQL (`user` schema).
    *   **`User.java` Entity**:
        *   Modified `src/main/java/forbee/domain/User.java` to use `userIdentifier` (Long type) as the `@Id`.
        *   Changed `email` field to `username`.
        *   Changed `nickname` field to `name`.
        *   Added `@PrePersist` to `role` field to set default value `USER`.
    *   **`UserRepository.java`**:
        *   Modified `src/main/java/forbee/domain/UserRepository.java` to extend `JpaRepository<User, Long>`.
        *   Changed `findByEmail(String)` to `findByUsername(String)`.
    *   **`SecurityConfig.java` (New)**:
        *   Created `src/main/java/forbee/config/SecurityConfig.java` to configure Spring Security for the `user` service.
        *   Permitted all requests to `/api/user-profiles` and `/users/**`.
    *   **`forbee.infra.UserController.java`**:
        *   Modified the existing `signUp` method to accept a `User` object (containing `userIdentifier`, `username`, `name`) from the `oauth` service.
        *   Implemented logic to save this `User` object (representing the user profile) to the `user` service's database.
        *   Added checks for existing `userIdentifier` and `username` to prevent duplicates.

### `gateway` Service (API Gateway, JWT Resource Server)
*   **Role**: Acts as the entry point for all client requests, routes requests to appropriate microservices, and validates JWTs for protected resources.
*   **Key Changes**:
    *   **`SecurityConfiguration.java`**:
        *   Configured Spring Security to act as an OAuth2 Resource Server by enabling `oauth2ResourceServer().jwt()`.
        *   Permitted all requests to `/api/users/register` and `/oauth/token`.
    *   **`application.yml`**:
        *   Updated the `user` service routing rule to correctly point to `http://localhost:8084` and use a more general `Path=/users/**` predicate.
        *   Added new routing rules for `oauth-register` and `oauth-token`.

## Key Learnings and Debugging Notes

*   **Lombok and Java Version Compatibility**: Encountered `IllegalAccessError` due to Java 21 and Spring Boot 2.3.1.RELEASE. Manually adding getters/setters in `User.java` was a workaround. A proper solution would involve upgrading Spring Boot to a version fully compatible with Java 21 (e.g., 2.7.x or 3.x).
*   **`replace` Tool Precision**: The `replace` tool requires exact string matching, including whitespace and line endings (`\r\n` vs `\n`). Frequent `read_file` calls were necessary to ensure correct `old_string` values.
*   **Conflicting Bean Definitions**: `ConflictingBeanDefinitionException` in the `user` service highlighted the importance of checking for existing classes with the same bean name.
*   **Service-to-Service Communication**: Initially, `oauth` service was sending requests to a non-existent endpoint (`/api/user-profiles`) on the `user` service. Corrected to `/users/signup` based on the existing `infra.UserController`.
*   **Environment-Specific Configuration**: Realized the need to externalize service URLs (`localhost` vs. Kubernetes service names) using `@Value` and `application.yml` profiles for seamless deployment across different environments. **(Note: This was temporarily reverted in `oauth` service due to persistent `@Value` resolution issues, using hardcoded URL as a workaround.)**
*   **Security Configuration**: Repeatedly adjusted `WebSecurityConfig` in both `oauth` and `gateway` services to ensure correct `permitAll()` and `authenticated()` rules for various endpoints.
*   **HTTPie Header Syntax**: Corrected `Authrization` typo to `Authorization` in `httpie` commands.
*   **JPA ID Generation**: Addressed `IdentifierGenerationException` by ensuring `ddl-auto: create` is used and that `@Id` fields are correctly handled (manually assigned for natural keys).
*   **Entity Field Alignment**: Aligned `username` and `name` fields between `oauth`'s `RegistrationRequestDto` and `user`'s `User` entity, and ensured correct data transfer.

## Current State

All three services (`oauth`, `user`, `gateway`) are built and configured to work together for JWT authentication and user profile management.
*   Users can register via the `gateway`, which then triggers profile creation in the `user` service.
*   Users can obtain JWT tokens via the `gateway`.
*   Authenticated requests with JWTs can access protected resources (e.g., user profiles) via the `gateway`.

Further work would involve implementing more detailed user profile management in the `user` service, adding more robust error handling, and potentially exploring more advanced Spring Security features.
