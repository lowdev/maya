# Step 1: Build the JAR (builder stage)
FROM gradle:8.3-jdk17 AS builder
WORKDIR /app
COPY build.gradle
COPY src ./src
RUN gradle clean build -x test

COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
