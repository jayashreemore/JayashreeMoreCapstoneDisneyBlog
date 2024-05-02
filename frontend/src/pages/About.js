import React from "react";
import { Typography, Container, Box, Avatar } from "@mui/material";
import BloggerPhoto from "../images/Jayaprofile.jpg"; // Replace with your blogger's photo
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={1} textAlign="center">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Blogger Photo"
              src={BloggerPhoto}
              sx={{ width: 250, height: 250, mb: 2 }}
            />
            <Typography variant="h3" component="h1" gutterBottom>
              About Us
            </Typography>
          </Box>
          <Typography variant="body1" gutterBottom>
            Welcome to our blog! We are passionate about sharing our knowledge
            and insights with you.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our mission is to provide valuable content on a variety of topics,
            including technology, lifestyle, travel, and more. We aim to
            inspire, educate, and entertain our readers through engaging
            articles, helpful tips, and personal stories.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our team consists of experienced writers, researchers, and
            contributors who are dedicated to delivering high-quality content
            that resonates with our audience. Whether you're a seasoned reader
            or new to our blog, we hope you find our articles informative and
            enjoyable.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Thank you for visiting our blog. We appreciate your support and
            feedback. Feel free to explore our site and connect with us on
            social media!
          </Typography>
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default AboutPage;
