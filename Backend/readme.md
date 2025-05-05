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

## /users/login

**Method:** POST

### Description
This endpoint logs in an existing user. It validates the request data, checks the credentials, and returns a JSON object containing the authentication token and user information.

### Required Request Data
The request body must be a JSON object with the following properties:
- **email**: A valid email address.
- **password**: A string with at least 8 characters.

**Example Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "mySecurePassword123"
}
```

### Status Codes
- **200 OK:** User successfully logged in.
- **400 Bad Request:** Validation errors occur (e.g., missing or invalid fields).
- **401 Unauthorized:** Invalid credentials or user not found.

### Example Response
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

## /users/profile

**Method:** GET

### Description
Retrieves the authenticated user's profile information. Requires a valid authentication token provided via cookies or the Authorization header.

### Headers
- Authorization: Bearer {token} (if not using cookies)

### Example Response
```json
{
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

### Status Codes
- **200 OK:** User profile retrieved successfully.
- **401 Unauthorized:** Authentication token missing or invalid.

## /users/logout

**Method:** GET

### Description
Logs out the authenticated user. It clears the authentication cookie and blacklists the token.

### Headers
- Authorization: Bearer {token} (if not using cookies)

### Example Response
```json
{
  "message": "Logged out successfully"
}
```

### Status Codes
- **200 OK:** Logout successful.
- **401 Unauthorized:** Authentication token missing or invalid.

## /captains/register

**Method:** POST

### Description
Registers a new captain. Validates request data, creates a new captain, and returns an authentication token along with captain information.

### Required Request Data
Request body must be a JSON object with the following properties:
- **fullname**: An object containing:
  - `firstname` (string, minimum 3 characters)
  - `lastname` (string, optional; if provided, minimum 3 characters)
- **email**: A valid email address.
- **password**: A string with at least 8 characters.
- **vehicle**: An object containing:
  - `color` (string, minimum 3 characters)
  - `plate` (string, minimum 3 characters)
  - `capacity` (number, min 1)
  - `type` (string, one of: "car", "motorcycle", "auto")

**Example Request Body:**
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "SecurePass123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "type": "car"
  }
}
```

### Response
- **201 Created:** Captain successfully registered.
- **400 Bad Request:** Validation errors or other errors.

**Example Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1...",
  "captain": {
    "_id": "5f8d0d55b54764421b7156c7",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com"
    // ...other captain details...
  }
}
```
