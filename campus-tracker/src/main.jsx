import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Move Router here
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router> 
      <App />  {/* Wrap App inside Router */}
    </Router>
  </StrictMode>
);