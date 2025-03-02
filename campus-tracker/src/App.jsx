import { Outlet } from "react-router-dom";
import Content from "./Content";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Login from "./Login";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GOOGLE_CLIENT_ID = "315887135987-i66k90cfdln8etgir50phi6fom7fl9lq.apps.googleusercontent.com"; 

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;