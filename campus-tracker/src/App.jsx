import { Outlet } from "react-router-dom";
import Content from "./Content";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Login from "./Login";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      
<BrowserRouter>
<Navbar />
    <Routes>
  
      <Route path="/" element={
      
      <Content/>
      
        
      } />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
</BrowserRouter></>
  );
}

export default App;