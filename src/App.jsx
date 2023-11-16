import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'; // Import the LoginForm component

function App() {
  return (
    <div className="App" data-testid="app-container">
      <LoginForm /> {/* Use the LoginForm component here */}
    </div>
  );
}

export default App;
