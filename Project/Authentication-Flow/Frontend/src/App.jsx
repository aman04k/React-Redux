// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';

// Define a simple Home component or redirect
const Home = () => <h1>Welcome to the Homepage</h1>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the root path */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
