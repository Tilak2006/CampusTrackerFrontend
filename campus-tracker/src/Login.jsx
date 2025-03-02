import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import GoogleAuth from "./GoogleAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login logic (Replace with backend API call)
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("jwt", "mock-token"); // Store JWT
      navigate("/content"); // Redirect to content page
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleGoogleLogin = (userData) => {
    console.log("Google Login Success:", userData);
    localStorage.setItem("jwt", userData.token); // Store JWT
    navigate("/"); // Redirect to content page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to SkillFlow</h2>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        <div className="google-auth">
          <GoogleAuth onSuccess={handleGoogleLogin} />
        </div>
      </form>
    </div>
  );
};

export default Login;
