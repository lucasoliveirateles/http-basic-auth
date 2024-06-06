# HTTP Basic Authentication

#### Start Server (YARN)
```
-> yarn

-> yarn start
```

#### Start Server (NPM)
```
-> npm install

-> npm run start
```

### API Access
```
-> http://localhost:3000
```

### Credentials
```
username: admin
password: admin
```

Basic authentication is a simple authentication scheme built into the HTTP protocol. It's often used for APIs and web applications to authenticate users. Here's a breakdown of how it works:

1. **Authorization Header**: When a client (such as a web browser or an HTTP client library) wants to access a protected resource on a server, it includes an Authorization header in the HTTP request.

2. **Basic Authentication Scheme**: The Authorization header contains the word "Basic" followed by a space and a base64-encoded string.

3. **Base64 Encoding**: The base64-encoded string consists of the username and password concatenated with a colon (":") in between them. For example, if the username is "admin" and the password is "admin", the string "admin
" would be base64-encoded.

4. **Server-side Decoding**: Upon receiving the request, the server decodes the base64-encoded string, extracts the username and password, and verifies them against the expected credentials.

5. **Authentication Process**: If the provided credentials match the expected ones, the server grants access to the requested resource. Otherwise, it denies access and may respond with a 401 Unauthorized status code.

6. **Security Considerations**: Basic authentication transmits the username and password in plain text, which can be intercepted if the communication is not encrypted (e.g., using HTTPS). Therefore, it's important to use HTTPS to secure the transmission of credentials.

Basic authentication is straightforward to implement and widely supported by web servers and client libraries. However, it lacks some advanced features such as session management and token-based authentication, which are often provided by more sophisticated authentication mechanisms like OAuth.