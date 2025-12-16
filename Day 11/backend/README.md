# Mobile Recharge Backend API

## Backend Folder Structure

```
backend/
├── config/          → Database configuration
│   └── database.js  → MongoDB connection setup
├── controllers/     → Request handling logic
│   ├── authController.js     → Authentication logic
│   └── rechargeController.js → Recharge operations
├── middleware/      → Custom middleware
│   └── auth.js      → JWT authentication middleware
├── models/          → Mongoose schemas
│   ├── User.js      → User model
│   ├── Operator.js  → Mobile operator model
│   ├── Plan.js      → Recharge plan model
│   └── Transaction.js → Transaction model
├── routes/          → API route definitions
│   ├── auth.js      → Authentication routes
│   ├── user.js      → User management routes
│   └── recharge.js  → Recharge operation routes
├── scripts/         → Utility scripts
│   └── seedData.js  → Database seeding script
├── .env            → Environment variables
├── package.json    → Dependencies and scripts
└── server.js       → Main server file
```

## Purpose of Each Folder

- **config/**: Contains database configuration and connection setup
- **models/**: Mongoose schemas defining data structure
- **routes/**: API endpoint definitions and routing
- **controllers/**: Business logic and request handling
- **middleware/**: Custom middleware for authentication, validation, etc.
- **scripts/**: Utility scripts for database operations

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/rechargehub
JWT_SECRET=your_jwt_secret_key_here
```

3. Seed the database with sample data:
```bash
npm run seed
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Recharge Operations
- `GET /api/operators` - Get all mobile operators
- `GET /api/plans` - Get recharge plans
- `POST /api/initiate` - Initiate recharge (protected)
- `GET /api/transactions` - Get transaction history (protected)

### User Management
- `GET /api/user/profile` - Get user profile (protected)
- `PUT /api/user/profile` - Update user profile (protected)

## Testing the Setup

1. Start the server: `npm run dev`
2. Check MongoDB connection in console
3. Test basic route: `GET http://localhost:5000/`
4. Test API endpoints using Postman or similar tool