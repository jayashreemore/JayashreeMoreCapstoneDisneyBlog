import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useProSidebar } from "react-pro-sidebar";

const HeaderTop = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: 0, bgcolor: "#fafafa" }}>
        <Toolbar>
          <IconButton
            onClick={() => collapseSidebar()}
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{
              mr: 2,
              bgcolor: "black", // Use primary color for background
              "&:hover": {
                bgcolor: "Green", // Darken on hover
              },
            }}
          >
            <MenuIcon sx={{ color: "white" }} /> {/* Set color to white */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderTop;
