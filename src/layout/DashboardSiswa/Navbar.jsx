import Logo from '/assets/Logo.svg';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Tooltip, IconButton, Avatar, Menu, MenuItem } from '@mui/material';

const setting = ['Profile', 'Logout'];
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

  return (
    <>
      <AppBar position="static" color="inherit" sx={{ px: 5, borderRadius: '0 0 50px 50px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', height: 90 }}>
          <img src={Logo} alt="Logos" />
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Button
              onClick={() => handleButtonClick('Dashboard')}
              sx={{
                fontWeight: 'bold',
                color: selectedButton === 'Dashboard' ? '#2D8EFF' : 'gray',
                '&:hover': { color: '#2D8EFF' },
              }}>
              Dashboard
            </Button>
            <Button
              onClick={() => handleButtonClick('Histori')}
              sx={{
                fontWeight: 'bold',
                color: selectedButton === 'Histori' ? '#2D8EFF' : 'gray',
                '&:hover': { color: '#2D8EFF' },
              }}>
              Histori
            </Button>
            <Button
              onClick={() => handleButtonClick('Absensi')}
              sx={{
                fontWeight: 'bold',
                color: selectedButton === 'Absensi' ? '#2D8EFF' : 'gray',
                '&:hover': { color: '#2D8EFF' },
              }}>
              Absensi
            </Button>
          </Box>
          <Box>
            <Tooltip title="Pengaturan">
              <IconButton onClick={handleOpenUserMenu} sx={{ '&:hover': { backgroundColor: 'transparent', boxShadow: 'none' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'end', marginRight: 2 }}>
                  <Typography sx={{ fontWeight: 'bold', color: 'black' }}>Jean Samuel Putra</Typography>
                  <Typography sx={{ fontWeight: 'light' }}>1234567890</Typography>
                </Box>
                <Avatar
                  sx={{ height: 56, width: 56 }}
                  alt="Profil"
                //   src="https://plus.unsplash.com/premium_photo-1664300900349-afd61c20f8b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: 8 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {setting.map((settings) => (
                <MenuItem key={settings} onClick={handleCloseUserMenu}>
                  <Typography fontWeight="semibold" textAlign="center">
                    {settings}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
