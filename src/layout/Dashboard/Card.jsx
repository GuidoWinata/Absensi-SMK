import { Box, Grid, Typography, CircularProgress, useMediaQuery  } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import React from 'react';

export default function Card() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container spacing={isMobile ? 4 : 7}>
        {isMobile ? (
          <>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: 7,
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 3, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <EventAvailableIcon sx={{ fontSize: 70, color: '#2D8EFF' }} />
              <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: 4 }}>
                <Box>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#5A6A85">
                    Total Presensi
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    19 Siswa
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: 7,
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 3, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <MailIcon sx={{ fontSize: 70, color: '#00D8B6' }} />
              <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: 4 }}>
                <Box>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#5A6A85">
                    Total Ijin/Sakit
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    19 Siswa
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: 7,
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 3, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ fontSize: 70, color: "#FFAE1F" }} />
              <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: 4 }}>
                <Box>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#5A6A85">
                    Total Telat
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    19 Siswa
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: '#FFFFFF',
                height: isMobile ? 130 : 230,
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                borderRadius: 7,
                boxShadow: "0px 12px 24px #DDE9F9",
              }}
            >
            <Box sx={{ marginLeft: 3, display: 'flex', flexDirection: 'row', textAlign: 'start', height: '65%', alignItems: 'center' }}>
              <CancelIcon sx={{ fontSize: 70, color: "#DC3545" }} />
              <Box sx={{ display: 'flex', flexDirection: 'row', paddingLeft: 4 }}>
                <Box>
                  <Typography variant="subtitle2" fontSize={18} fontWeight="semibold" color="#5A6A85">
                    Total Alpha
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    19 Siswa
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
          </>
        ) : (
          <>
            <Grid item xs={3}>
              <Box
                sx={{
                  bgcolor: '#FFFFFF',
                  height: 230,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  borderRadius: 7,
                  boxShadow: "0px 12px 24px #DDE9F9",
                }}
              >
                <Box sx={{ marginLeft: 5, display: 'flex', flexDirection: 'column', textAlign: 'start', height: '65%' }}>
                  <EventAvailableIcon sx={{ fontSize: 65, color: '#2D8EFF' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="semibold" color="#5A6A85">
                        Total Presensi
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        19 Siswa
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: 5, position: "relative", display: "inline-flex" }}>
                      <CircularProgress
                        size={80}
                        thickness={4}
                        value={(19 / 36) * 100}
                        variant="determinate"
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: "absolute",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 1
                        }}
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="text.secondary"
                          sx={{ fontWeight: "bold" }}
                        >
                          {`19/36`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                sx={{
                  bgcolor: '#FFFFFF',
                  height: 230,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  borderRadius: 7,
                  boxShadow: "0px 12px 24px #DDE9F9",
                }}
              >
                <Box sx={{ marginLeft: 5, display: 'flex', flexDirection: 'column', textAlign: 'start', height: '65%' }}>
                  <MailIcon sx={{ fontSize: 65, color: '#00D8B6' }} />
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="semibold" color="#5A6A85">
                        Total Ijin/Sakit
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        19 Siswa
                      </Typography>
                      <Typography variant="subtitle1" fontWeight="semibold" color="#5A6A85">
                        Hari ini
                      </Typography>
                    </Box>
                    <Box sx={{ marginLeft: 5, position: "relative", display: "inline-flex" }}>
                      <CircularProgress
                        size={80}
                        thickness={4}
                        value={(19 / 36) * 100}
                        variant="determinate"
                        sx={{ color: '#00D8B6' }}
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: "absolute",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 1
                        }}
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="text.secondary"
                          sx={{ fontWeight: "bold" }}
                        >
                          {`19/36`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );  
}
