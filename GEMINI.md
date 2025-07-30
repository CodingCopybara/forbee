# Project Summary: Forbee - JWT Authentication and User Profile Separation

This document summarizes the modifications made to the `forbee` microservices project, focusing on implementing JWT authentication and separating user profile data between the `oauth` and `user` services.

## Objective
The primary goal was to establish a robust JWT authentication flow, where the `oauth` service acts as the Authorization Server (issuing JWTs), the `gateway` service acts as a JWT Resource Server (validating JWTs), and the `user` service manages user profile data, distinct from the authentication credentials.

## Service-Specific Changes

### `oauth` Service (Authorization Server, JWT Issuer)
*   **Role**: Responsible for user authentication, JWT issuance, and managing core authentication credentials (email, hashed password, user identifier).
*   **Key Changes**:
    *   **JWT Signing Key**: Generated `server.jks` using `keytool` and placed it in `src/main/resources` for JWT signing.
    *   **Lombok Version**: Updated Lombok dependency to `1.18.30` in `pom.xml` to address potential compatibility issues (though manual getter/setter additions were later required due to Java 21/Spring Boot 2.3.1.RELEASE interaction).
    *   **`User.java` Entity**:
        *   Modified to include a `userIdentifier` field of type `Long` (previously `String`).
        *   Manually added `getUserIdentifier()` and `setUserIdentifier()` methods to bypass Lombok processing issues in the specific environment.
    *   **`UserRepository.java`**: Updated `findByUserIdentifier` method signature to accept `Long` type.
    *   **`UserController.java` (New)**:
        *   Created `src/main/java/com/example/template/controller/UserController.java` to handle user registration.
        *   Implemented `/api/users/register` endpoint to:
            *   Accept `username` (email), `password`, and `userIdentifier` (optional, auto-generated `System.currentTimeMillis()` if not provided).
            *   Hash the password using `PasswordEncoder`.
            *   Save the user's authentication data to `oauth` service's database.
            *   **Crucially**: Send the `userIdentifier`, `username` (email), and `role` to the `user` service's `/users/signup` endpoint using `RestTemplate` for profile creation.
            *   Configured `userServiceUrl` using `@Value` from `application.yml` for environment-specific URL resolution (e.g., `http://localhost:8084` for local, `http://user:8080` for Kubernetes).
    *   **`WebSecurityConfig.java`**: Configured Spring Security to permit all requests to `/api/users/register` and `/oauth/token` endpoints, allowing unauthenticated access for registration and token issuance.
    *   **`OAuth2AuthorizationServerConfig.java`**: Temporarily removed custom `accessDeniedHandler` and `authenticationEntryPoint` to get clearer error messages during debugging, then restored them. The core JWT issuance logic was already in place.
    *   **`application.yml`**: Added `user-service.url` property under both `default` and `docker` profiles to dynamically configure the `user` service's endpoint for inter-service communication.

### `user` Service (User Profile Management)
*   **Role**: Responsible for storing and managing detailed user profile information, identified by the `userIdentifier` from the `oauth` service.
*   **Key Changes**:
    *   **`User.java` Entity**:
        *   Modified `src/main/java/forbee/domain/User.java` to use `userIdentifier` (Long type) as the `@Id`.
        *   Included `email`, `nickname`, and `role` fields.
        *   Removed `id`, `name`, `password` fields as these are managed by the `oauth` service.
    *   **`UserRepository.java`**:
        *   Modified `src/main/java/forbee/domain/UserRepository.java` to extend `JpaRepository<User, Long>` (previously `PagingAndSortingRepository<User, Long>`).
        *   Added `findByEmail(String)` method.
        *   Corrected a missing closing brace `}` that caused compilation errors.
        *   Corrected missing `JpaRepository` import.
    *   **`SecurityConfig.java` (New)**:
        *   Created `src/main/java/forbee/config/SecurityConfig.java` to configure Spring Security for the `user` service.
        *   Permitted all requests to `/api/user-profiles` (for `oauth` service communication) and `/users/**` (for Spring Data REST endpoints) to allow unauthenticated access for profile creation and general user data retrieval.
    *   **`forbee.infra.UserController.java`**:
        *   Modified the existing `signUp` method to accept a `User` object (containing `userIdentifier`, `email`, `role`) from the `oauth` service.
        *   Implemented logic to save this `User` object (representing the user profile) to the `user` service's database.
        *   Added checks for existing `userIdentifier` and `email` to prevent duplicates.

### `gateway` Service (API Gateway, JWT Resource Server)
*   **Role**: Acts as the entry point for all client requests, routes requests to appropriate microservices, and validates JWTs for protected resources.
*   **Key Changes**:
    *   **`SecurityConfiguration.java`**:
        *   Configured Spring Security to act as an OAuth2 Resource Server by enabling `oauth2ResourceServer().jwt()`, allowing it to validate JWTs issued by the `oauth` service.
        *   Permitted all requests to `/api/users/register` and `/oauth/token` to allow clients to register and obtain tokens via the gateway without prior authentication.
    *   **`application.yml`**:
        *   Updated the `user` service routing rule to correctly point to `http://localhost:8084` (for default profile) and use a more general `Path=/users/**` predicate to cover Spring Data REST endpoints.
        *   Added new routing rules for `oauth-register` and `oauth-token` to forward requests to the `oauth` service.

## Key Learnings and Debugging Notes

*   **Lombok and Java Version Compatibility**: Encountered `IllegalAccessError` due to Java 21 and Spring Boot 2.3.1.RELEASE. Manually adding getters/setters in `User.java` was a workaround. A proper solution would involve upgrading Spring Boot to a version fully compatible with Java 21 (e.g., 2.7.x or 3.x).
*   **`replace` Tool Precision**: The `replace` tool requires exact string matching, including whitespace and line endings (`\r\n` vs `\n`). Frequent `read_file` calls were necessary to ensure correct `old_string` values.
*   **Conflicting Bean Definitions**: `ConflictingBeanDefinitionException` in the `user` service highlighted the importance of checking for existing classes with the same bean name, especially when adding new controllers or components.
*   **Service-to-Service Communication**: Initially, `oauth` service was sending requests to a non-existent endpoint (`/api/user-profiles`) on the `user` service. Corrected to `/users/signup` based on the existing `infra.UserController`.
*   **Environment-Specific Configuration**: Realized the need to externalize service URLs (`localhost` vs. Kubernetes service names) using `@Value` and `application.yml` profiles for seamless deployment across different environments.
*   **Security Configuration**: Repeatedly adjusted `WebSecurityConfig` in both `oauth` and `gateway` services to ensure correct `permitAll()` and `authenticated()` rules for various endpoints.
*   **HTTPie Header Syntax**: Corrected `Authrization` typo to `Authorization` in `httpie` commands.

## Current State

All three services (`oauth`, `user`, `gateway`) are built and configured to work together for JWT authentication and user profile management.
*   Users can register via the `gateway`, which then triggers profile creation in the `user` service.
*   Users can obtain JWT tokens via the `gateway`.
*   Authenticated requests with JWTs can access protected resources (e.g., user profiles) via the `gateway`.

Further work would involve implementing more detailed user profile management in the `user` service, adding more robust error handling, and potentially exploring more advanced Spring Security features.
