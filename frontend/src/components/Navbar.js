import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
//import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HouseIcon from "@mui/icons-material/House";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userLogoutAction } from "../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

//const pages = ["Log In"];

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.signIn);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const handleAdminClick = () => {
    navigate("/admin/dashboard");
  };

  const handleUserClick = () => {
    navigate("/user/dashboard");
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#000" }}>
      <Container>
        <Toolbar disableGutters>
          <HouseIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Jaya's Blog
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block", mr: 2 }}
            >
              <Link
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </Typography>
            {userInfo && (
              <>
                {userInfo.role === "admin" && (
                  <>
                    <Typography
                      sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                      onClick={handleAdminClick}
                      style={{ cursor: "pointer" }}
                    >
                      Admin
                    </Typography>
                    <Typography
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                    >
                      <Link
                        to="/about"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        About
                      </Link>
                    </Typography>
                    <Typography
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                    >
                      <Link
                        to="/contactus"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        Contact Us
                      </Link>
                    </Typography>
                    <Typography
                      onClick={logOutUser}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        mr: 2,
                        cursor: "pointer",
                      }}
                    >
                      Log Out
                    </Typography>
                  </>
                )}
                {userInfo.role !== "admin" && (
                  <>
                    <Typography
                      sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                      onClick={handleUserClick}
                      style={{ cursor: "pointer" }}
                    >
                      User
                    </Typography>
                    <Typography
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                    >
                      <Link
                        to="/about"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        About
                      </Link>
                    </Typography>
                    <Typography
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                    >
                      <Link
                        to="/contactus"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        Contact Us
                      </Link>
                    </Typography>
                    <Typography
                      onClick={logOutUser}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        mr: 2,
                        cursor: "pointer",
                      }}
                    >
                      Log Out
                    </Typography>
                  </>
                )}
              </>
            )}
            {!userInfo && (
              <>
                <Typography
                  sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                >
                  <Link
                    to="/register"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Register
                  </Link>
                </Typography>

                <Typography
                  sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                >
                  <Link
                    to="/login"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Login
                  </Link>
                </Typography>
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                >
                  <Link
                    to="/about"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    About
                  </Link>
                </Typography>
                <Typography
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", mr: 2 }}
                >
                  <Link
                    to="/contactus"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Contact Us
                  </Link>
                </Typography>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{
                sx: {
                  "& .MuiMenu-list": {
                    bgcolor: "primary.white",
                    color: "white",
                  },
                },
              }}
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard"
                  >
                    Admin
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link style={{ textDecoration: "none" }} to="/user/dashboard">
                    User
                  </Link>
                </Typography>
              </MenuItem>
              {userInfo ? (
                <MenuItem onClick={logOutUser}>
                  <Typography textAlign="center" color="#8e67b2">
                    Log Out
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none" }} to="/login">
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
