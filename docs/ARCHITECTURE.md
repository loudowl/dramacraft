# DramaCraft Technical Architecture Document

## 1. Tech Stack

### Frontend
- **Framework:** React Native 0.72
- **State Management:** Redux 8.0
- **Navigation:** React Navigation 6.0

### Backend
- **Runtime:** Node.js 18.x
- **Web Framework:** Express.js 4.18

### Database
- **Primary Database:** PostgreSQL 14.x

### Cloud Services
- **Storage:** AWS S3
- **Compute:** AWS Lambda for serverless processing
- **AI Integration:** OpenAI GPT-4.5, ElevenLabs Voice API

### Hosting
- **Backend Hosting:** AWS Elastic Beanstalk
- **Database Hosting:** AWS RDS for PostgreSQL

### DevOps
- **CI/CD:** GitHub Actions

## 2. Project Structure

```plaintext
DramaCraft/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Recorder.js
│   │   │   ├── StoryPreview.js
│   │   │   └── ...
│   │   ├── screens/
│   │   │   ├── HomeScreen.js
│   │   │   ├── StoryScreen.js
│   │   │   └── ...
│   │   ├── redux/
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   └── store.js
│   │   ├── navigation/
│   │   ├── assets/
│   │   └── utils/
│   ├── package.json
│   └── ...
│
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── services/
    │   ├── utils/
    │   └── app.js
    ├── config/
    │   ├── db.js
    │   └── ...
    ├── package.json
    └── ...

```

## 3. API Design

### Endpoints

#### User Management
- **POST /api/register**
  - Request: `{ "email": "string", "password": "string" }`
  - Response: `{ "token": "string", "userId": "string" }`

- **POST /api/login**
  - Request: `{ "email": "string", "password": "string" }`
  - Response: `{ "token": "string", "userId": "string" }`

#### Story Management
- **POST /api/stories**
  - Request: `{ "audioFile": "file", "userId": "string" }`
  - Response: `{ "storyId": "string", "status": "processing" }`

- **GET /api/stories/:storyId**
  - Response: `{ "storyId": "string", "status": "string", "videoUrl": "string" }`

#### Credit Management
- **GET /api/credits/:userId**
  - Response: `{ "credits": "number" }`

- **POST /api/credits/purchase**
  - Request: `{ "userId": "string", "package": "string" }`
  - Response: `{ "credits": "number" }`

## 4. Data Models

### Users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  credits INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Stories
```sql
CREATE TABLE stories (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  audio_url TEXT NOT NULL,
  video_url TEXT,
  status VARCHAR(50) DEFAULT 'processing',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Transactions
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount INT NOT NULL,
  type VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 5. Authentication

### Approach: JWT (JSON Web Tokens)
- **Flow:**
  1. User registers or logs in to receive a JWT.
  2. JWT is stored on the client-side (e.g., AsyncStorage in React Native).
  3. JWT is sent in the `Authorization` header for authenticated API requests.
  4. Backend verifies JWT for protected routes.

## 6. State Management

### Strategy: Redux
- **Store Structure:**
  - `auth`: Manages authentication state and user info.
  - `stories`: Handles story creation, updates, and retrieval.
  - `credits`: Manages user credit information and transactions.

## 7. Key Dependencies

### Frontend
- **react-native**: Core framework for building the app.
- **redux**: State management.
- **react-navigation**: Navigation library.
- **axios**: HTTP client for API requests.

### Backend
- **express**: Web framework for Node.js.
- **jsonwebtoken**: For JWT authentication.
- **pg**: Node.js client for PostgreSQL.
- **multer**: Middleware for handling `multipart/form-data` for file uploads.

## 8. Deployment

### Hosting
- **Frontend:** Deployed to Apple App Store and Google Play Store.
- **Backend:** Hosted on AWS Elastic Beanstalk for scalability and managed deployment.
- **Database:** AWS RDS for PostgreSQL with automated backups.

### CI/CD
- **GitHub Actions:**
  - Automated testing on push to `main` branch.
  - Deployment to AWS on successful test completion.
  - Separate workflows for frontend and backend with environment-specific configurations.

This architecture is designed to handle the expected user load and provide a scalable, secure, and efficient system for the DramaCraft application, ensuring a smooth user experience and facilitating rapid iteration and deployment.