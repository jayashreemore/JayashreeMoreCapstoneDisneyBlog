import { Box } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Email } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "Green",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ color: "#fafafa" }}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              sx={{
                fontSize: "2rem",
                mr: 2,
                color: "#fff",
                "&:hover": { color: "#3b5998" },
              }}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              sx={{
                fontSize: "2rem",
                mr: 2,
                color: "#fff",
                "&:hover": { color: "#e4405f" },
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jayashreemorejaya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              sx={{
                fontSize: "2rem",
                mr: 2,
                color: "#fff",
                "&:hover": { color: "#0077b5" },
              }}
            />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email
              sx={{
                fontSize: "2rem",
                color: "#fff",
                "&:hover": { color: "#ff0000" },
              }}
            />
          </a>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#000",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <Box sx={{ color: "#fafafa", textAlign: "center" }}>
          <h3>
            PerScholas Columbus Women in Software Engineering Cohort 8 Jan-May
            2024
          </h3>
          <h4>Trainer: Christina Takara & Created by Jayshree Morey</h4>
          <p>Email: jayshreematre@gmail.com</p>
          &copy; {new Date().getFullYear()} Jayas's Blog. All Rights Reserved.
        </Box>
      </Box>
    </>
  );
};

export default Footer;
