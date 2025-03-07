# Backend Project - Cab Booking System

This is a backend project for user registration and authentication using Node.js, Express, and MongoDB.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Itz-snj/Fullstack1.git
    cd Fullstack1/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the [backend](http://_vscodecontentref_/0) directory and add:
    ```properties
    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### User Registration
- **URL:** `/user/register`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "name": {
            "firstname": "John",
            "middlename": "Doe",
            "lastname": "Smith"
        },
        "email": "john.doe@example.com",
        "password": "yourpassword"
    }
    ```

### User Login
- **URL:** `/user/login`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "email": "john.doe@example.com",
        "password": "yourpassword"
    }
    ```

## Environment Variables

- `PORT`: Server port.
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: JWT secret key.

## Project Structure

```plaintext
backend/
├── controllers/
│   └── user.controller.js
├── db/
│   └── db.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
├── services/
│   └── user.service.js
├── .env
├── app.js
├── server.js
└── package.json


Added a shell script to append files in github and stage it from local to remote git repository