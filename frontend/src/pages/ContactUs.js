import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend with the form data
      const response = await axios.post("/api/contactus", formData);
      console.log(response.data); // Log the response from the backend
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error
    }
  };

  return (
    <>
      <Navbar />
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: "center" }}>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        {/* Left Box - Contact Information */}
        <Grid item xs={6}>
          <Box
            sx={{
              borderRight: "1px solid #ccc",
              paddingRight: 2,
              marginRight: 2,
              marginLeft: 10,
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 5 }}>
              Contact Information
            </Typography>
            <Typography variant="body1">
              You can reach out to us via the following methods:
            </Typography>
            <Typography variant="body1">
              Email: Jayashreematre@gmail.com
            </Typography>
            <Typography variant="body1">Phone: +1 234 567 8900</Typography>
            <Typography variant="body1">
              Address: 123 Main Street, Plain City, Ohio, 43064
            </Typography>
          </Box>
        </Grid>
        {/* Right Box - Contact Form */}
        <Grid item xs={6}>
          <Box
            sx={{
              paddingLeft: 10,
              marginBottom: 5,
              marginTop: 5,
              marginRight: 15,
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                id="phone"
                name="phone"
                label="Phone"
                type="tel"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                required
                id="message"
                name="message"
                label="Message"
                multiline
                rows={4}
                fullWidth
                value={formData.message}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default ContactUs;
