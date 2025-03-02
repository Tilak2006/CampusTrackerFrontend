import { useState } from "react";
import "./contactform.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Contact Us</h2>
          {submitted ? (
            <p className="success-message">Message Sent!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Name" 
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Email" 
                />
              </div>

              <div className="input-group">
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          )}

         
        </div>

     
      </div>
    </div>
  );
};

export default Contact;