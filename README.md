# FullStack Project - Cab Booking System

This is a full-stack project for a cab booking system. It includes both the frontend and backend components.

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

```
FullStack1/
├── backend/
│   ├── controllers/
│   │   ├── user.controller.js
│   │   └── captain.controller.js
│   ├── db/
│   │   └── db.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── captain.model.js
│   │   └── blacklist.token.model.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   └── captain.routes.js
│   ├── services/
│   │   └── user.service.js
│   ├── .env
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── components/
│   │   │   ├── signup.jsx
│   │   │   └── ui/
│   │   │       ├── input.jsx
│   │   │       └── label.jsx
│   │   ├── lib/
│   │   │   └── utils.js
│   │   ├── pages/
│   │   │   └── UserSignUp.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```


Added a shell script to append files in github and stage it from local to remote git repository