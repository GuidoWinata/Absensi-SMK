import Logo from "/assets/Logo.svg";
import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import client from "../router/Client";

// const setting = ["Profile", "Logout"];
export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedButton, setSelectedButton] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  if (localStorage.getItem("token") == null) {
    return <Navigate to={"/"} />;
  }

  const logout = () => {
    client.post("auth/logout").then(() => {
      localStorage.clear();
      window.location.reload();
    });
  };

  return (
    <>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          px: 5,
          borderRadius: "0 0 50px 50px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", height: 90 }}>
          <img src={Logo} alt="Logos" />
          <Box sx={{ display: "flex", gap: 4 }}>
            <Link to="dashboard">
              <Button
                onClick={() => handleButtonClick("Dashboard")}
                sx={{
                  fontWeight: "bold",
                  color: selectedButton === "Dashboard" ? "#2D8EFF" : "gray",
                  "&:hover": { color: "#2D8EFF" },
                }}
              >
                Dashboard
              </Button>
            </Link>
            <Link to="siswa">
              <Button
                onClick={() => handleButtonClick("Siswa")}
                sx={{
                  fontWeight: "bold",
                  color: selectedButton === "Siswa" ? "#2D8EFF" : "gray",
                  "&:hover": { color: "#2D8EFF" },
                }}
              >
                Siswa
              </Button>
            </Link>
            <Link to="absensi">
              <Button
                onClick={() => handleButtonClick("Absensi")}
                sx={{
                  fontWeight: "bold",
                  color: selectedButton === "Absensi" ? "#2D8EFF" : "gray",
                  "&:hover": { color: "#2D8EFF" },
                }}
              >
                Absensi
              </Button>
            </Link>
          </Box>
          <Box>
            <Tooltip title="Pengaturan">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "end",
                    marginRight: 2,
                  }}
                >
                  <Typography sx={{ fontWeight: "bold", color: "black" }}>
                    {localStorage.getItem("nama")}
                  </Typography>
                  <Typography sx={{ fontWeight: "light" }}>
                    {localStorage.getItem("email")}
                  </Typography>
                </Box>
                <Avatar
                  sx={{ height: 56, width: 56 }}
                  alt="Profil"
                  src="https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: 8 }}
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
                <Typography fontWeight="semibold" textAlign="center">
                  <button onClick={logout}>Logout</button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}