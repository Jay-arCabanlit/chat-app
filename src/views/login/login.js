import React, { useState } from "react";
import "./login.css"; // Import CSS file for Login component
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    navigate("/chat");
    // Implement login logic here
    // You can use APIs, authentication libraries, or any other method to authenticate the user
    // Example: axios.post('/api/login', { email, password })
    // If login is successful, navigate to the next page
    // If login fails, set error message in the state
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <input
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
      {error && <p className="login-error">{error}</p>}
    </div>
  );
};

export default Login;
