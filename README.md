# Blog App

A full-stack MERN (MongoDB, Express.js, React, Node.js) blog application that allows users to create, read, update, and delete blog posts with user authentication and a modern, responsive interface.

## Features

- User authentication (sign up, sign in, sign out)
- Create, edit, and delete blog posts
- Rich text editor for blog content
- Responsive design with Tailwind CSS
- Redux for state management
- Firebase integration
- Modern UI components with Flowbite React

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **Vite** - Build tool and development server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Flowbite React** - UI components
- **React Quill** - Rich text editor

## Project Structure

```
Blog-App/
├── api/                    # Backend API
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── utils/             # Utility functions
│   └── index.js           # Server entry point
├── client/                # Frontend React app
│   ├── src/               # Source code
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
├── package.json           # Backend dependencies
└── README.md              # Project documentation
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/Varadpensalwar/Blog-App.git
cd Blog-App
```

### 2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
npm install --prefix client
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_CONFIG=your_firebase_config
```

### 4. Run the application

#### Development mode
```bash
# Start backend server (runs on port 3000)
npm run dev

# Start frontend development server (runs on port 5173)
cd client
npm run dev
```

#### Production mode
```bash
# Build the application
npm run build

# Start production server
npm start
```

## Demo

- **Video Demo**: [Varad'sBlog.mp4](./Varad'sBlog.mp4)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
