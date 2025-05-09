# Activity Booking API

A RESTful API for managing activity bookings. Built with Node.js, Express, and MongoDB.

## Features

- User authentication with JWT
- Activity listing and details
- Booking management
- Input validation
- Data persistence with MongoDB
- MVC architecture

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### Activities
- `GET /api/activities` - Get all activities
- `GET /api/activities/:id` - Get single activity
- `POST /api/activities` - Create a new activity (protected)

### Bookings
- `POST /api/bookings` - Book an activity (protected)
- `GET /api/bookings/me` - Get user's bookings (protected)
- `DELETE /api/bookings/:id` - Cancel booking (protected)

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd activity-booking-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

4. Start the server
   ```
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

### Testing with Postman

1. Import the provided Postman collection
2. Test the endpoints:
   - Register a user
   - Login with the registered user
   - Copy the JWT token from the login response
   - Use the token in the Authorization header (Bearer Token) for protected routes

## Deployment

This API can be deployed on:
- [Render](https://render.com)
- [Vercel](https://vercel.com)
- [Cyclic](https://cyclic.sh)

## License

MIT 