import React, { useState, createContext, useContext, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const GoogleAuth = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log("User Info:", decoded);
    setUser(decoded);
    localStorage.setItem("user", JSON.stringify(decoded));
    alert(`Welcome to Jedis`);
    navigate("/dashboard");
  };

  const handleError = () => {
    console.log("Google Login Failed");
    alert("Login Failed");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!user ? (
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default GoogleAuth;