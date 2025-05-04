# API Documentation

## /users/register

**Method:** POST

### Description
This endpoint registers a new user. It validates the request data, creates a new user, and returns a JSON object containing the authentication token and user information.

### Required Request Data
The request body must be a JSON object with the following properties:
- **fullname**: An object containing:
  - `firstname` (string, minimum 3 characters)
  - `lastname` (string, optional but if provided should be at least 3 characters)
- **email**: A valid email address (minimum 5 characters).
- **password**: A string with at least 8 characters.

**Example Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "mySecurePassword123"
}
```

### Status Codes
- **201 Created:** User successfully registered.
- **400 Bad Request:** Validation errors occur (e.g., missing or invalid fields).

### Example Response (using GET style for demonstration purposes)
Although the endpoint accepts POST requests for registration, a GET request example is provided to illustrate the JSON response format.

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "1234567890abcdef",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user details...
  }
}
```

### Note
Make sure to include the correct headers (e.g., `Content-Type: application/json`) when making requests to this endpoint.
