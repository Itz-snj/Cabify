# User Registration API

## Endpoint: `/user/register`

### Method: POST

### Description
This endpoint is used to register a new user. It validates the input data and creates a new user in the database if the data is valid.

### Request Body
The request body should be a JSON object with the following fields:

- `name`: An object containing:
  - `firstname` (string, required, minimum length: 3)
  - `middlename` (string, optional)
  - `lastname` (string, required)
- `email` (string, required, must be a valid email)
- `password` (string, required, minimum length: 6)

Example:
```json
{
  "name": {
    "firstname": "John",
    "middlename": "Doe",
    "lastname": "Smith"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success (201 Created)
- **Status Code**: 201
- **Response Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "name": {
        "firstname": "John",
        "middlename": "Doe",
        "lastname": "Smith"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors (400 Bad Request)
- **Status Code**: 400
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Please enter a valid email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be atleast 6 characters",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "First name must be atleast 3 characters",
        "param": "name.firstname",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists (400 Bad Request)
- **Status Code**: 400
- **Response Body**:
  ```json
  {
    "error": "User already exists"
  }
  ```

#### Server Error (500 Internal Server Error)
- **Status Code**: 500
- **Response Body**:
  ```json
  {
    "error": "User registration failed: error_message"
  }
  ```

### Example Request
```bash
curl -X POST http://localhost:4000/user/register \
-H "Content-Type: application/json" \
-d '{
  "name": {
    "firstname": "John",
    "middlename": "Doe",
    "lastname": "Smith"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```
