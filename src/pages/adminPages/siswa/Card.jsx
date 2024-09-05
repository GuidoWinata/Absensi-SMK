import { Box, Grid, Typography, CircularProgress  } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailIcon from "@mui/icons-material/Mail";
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';

export default function Card() {
  return (
    <>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: '#FFFFFF',
              height: 230,
              width: 'full',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}>
            <Box sx={{marginLeft: 5, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'start', height: '65%', alignItems: 'start' }}>
              <EventAvailableIcon sx={{ fontSize: 65, color: '#2D8EFF' }} />
              <Box  sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                <Typography variant="p" fontWeight="semibold" color="#5A6A85">
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
                      value={(19 / 36) * 100} // Menghitung persentase
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
                        marginBottom: 0
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >{`19/36`}</Typography>
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
              width: 'full',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}>
            <Box sx={{marginLeft: 5, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'start', height: '65%', alignItems: 'start' }}>
              <MailIcon sx={{ fontSize: 65, color: '#00D8B6' }} />
              <Box  sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                  Total Ijin/Sakit
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  19 Siswa
                </Typography>
                
                </Box>
                  <Box sx={{ marginLeft: 5, position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      size={80}
                      thickness={4}
                      value={(19 / 36) * 100} // Menghitung persentase
                      variant="determinate"
                      sx={{color:'#00D8B6'}}
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
                        marginBottom: 0
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >{`19/36`}</Typography>
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
              width: 'full',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}>
            <Box sx={{marginLeft: 5, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'start', height: '65%', alignItems: 'start' }}>
              <AccessTimeIcon sx={{ fontSize: 65, color: '#FFAE1F' }} />
              <Box  sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                  Total Telat
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  19 Siswa
                </Typography>
                
                </Box>
                  <Box sx={{ marginLeft: 5, position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      size={80}
                      thickness={4}
                      value={(19 / 36) * 100} // Menghitung persentase
                      variant="determinate"
                      sx={{color:'#FFAE1F'}}
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
                        marginBottom: 0
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >{`19/36`}</Typography>
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
              width: 'full',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              borderRadius: 7,
              boxShadow: "0px 12px 24px #DDE9F9",
            }}>
            <Box sx={{marginLeft: 5, display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'start', height: '65%', alignItems: 'start' }}>
              <CancelIcon sx={{ fontSize: 65, color: '#DC3545' }} />
              <Box  sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                  Total Alpha
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  19 Siswa
                </Typography>
                
                </Box>
                  <Box sx={{ marginLeft: 5, position: "relative", display: "inline-flex" }}>
                    <CircularProgress
                      size={80}
                      thickness={4}
                      value={(19 / 36) * 100} // Menghitung persentase
                      variant="determinate"
                      sx={{color:'#DC3545'}}
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
                        marginBottom: 0
                      }}
                    >
                      <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: "bold" }}
                      >{`19/36`}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        
      </Grid>
    </>
  );
}
