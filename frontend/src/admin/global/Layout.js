import { Box } from "@mui/material";
import React from "react";
import HeaderTop from "./HeaderTop";
import SidebarAdm from "./Sidebar";
import Footer from "../../components/Footer";

const Layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Box>
          <div style={{ display: "flex", minHeight: "100vh" }}>
            <SidebarAdm />
            <Box sx={{ width: "100%", bgcolor: "#fafafa" }}>
              <HeaderTop />
              <Box sx={{ p: 3 }}>
                <Component {...props} />
              </Box>
            </Box>
          </div>
          <Footer />
        </Box>
      </>
    );
  };

export default Layout;
