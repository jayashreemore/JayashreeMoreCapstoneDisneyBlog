import React, { useEffect } from "react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box } from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  userLogoutAction,
  userProfileAction,
} from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";

const SidebarAdm = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch, userInfo, navigate]);

  // Logout function
  const logOut = () => {
    dispatch(userLogoutAction());
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <Sidebar
      backgroundColor="black"
      style={{ borderRightStyle: "none", color: "#fff" }} // Set color to white
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ pt: 4 }}>
          <Menu
            menuItemStyles={{
              button: {
                [`&.${menuClasses.button}`]: {
                  color: "#fff", // Set color to white
                },
                "&:hover": {
                  backgroundColor: "inherit", // Remove hover effect
                },
              },
              icon: {
                [`&.${menuClasses.icon}`]: {
                  color: "#fff", // Set color to white
                },
              },
            }}
          >
            {userInfo && userInfo.role === "admin" ? (
              <>
                <MenuItem component={<Link to="/" />} icon={<HomeIcon />}>
                  Home
                </MenuItem>
                <MenuItem
                  component={<Link to="/admin/dashboard" />}
                  icon={<DashboardIcon />}
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  component={<Link to="/admin/post/create" />}
                  icon={<PostAddIcon />}
                >
                  Create movie
                </MenuItem>
                <MenuItem
                  component={<Link to="/admin/userManagement" />}
                  icon={<PostAddIcon />}
                >
                  User Management
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem component={<Link to="/" />} icon={<HomeIcon />}>
                  Home
                </MenuItem>
                <MenuItem
                  component={<Link to="/user/dashboard" />}
                  icon={<DashboardIcon />}
                >
                  Dashboard
                </MenuItem>
              </>
            )}
          </Menu>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Menu
            menuItemStyles={{
              button: {
                [`&.${menuClasses.button}`]: {
                  color: "#fff", // Set color to white
                },
                "&:hover": {
                  backgroundColor: "inherit", // Remove hover effect
                },
              },
              icon: {
                [`&.${menuClasses.icon}`]: {
                  color: "#fff", // Set color to white
                },
              },
            }}
          >
            <MenuItem onClick={logOut} icon={<LoginIcon />}>
              Log out
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default SidebarAdm;
