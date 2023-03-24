import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./ContactUs.css";
import BackgroundImageContactUs from "./BackgroundImageContactUs";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to send the contact form data to your backend or email
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <BackgroundImageContactUs />
      <div className="backcont">
        <h1>Contact Us</h1>
      </div>
      <section>
        <div className="contact-us">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <div className="map">
            <iframe
              title="map of place"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28079.18940759067!2d77.23158639172118!3d28.392128166722344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cde88a41c4907%3A0xc297f471e083dc8e!2sSector%2049%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1679672570693!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
