import { Box, Grid, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';

export default function Card() {
  return (
    <>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: '#DDE9F9',
              height: 270,
              width: 'full',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'center', height: '65%', alignItems: 'center' }}>
              <EventAvailableIcon sx={{ fontSize: 65, color: '#2D8EFF' }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                19 Siswa
              </Typography>
              <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                Total Presensi
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: '#E6FFFA',
              height: 270,
              width: 'full',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'center', height: '65%', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ fontSize: 65, color: '#00D8B6' }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                19 Siswa
              </Typography>
              <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                Total Hadir
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: '#FEF5E5',
              height: 270,
              width: 'full',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'center', height: '65%', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ fontSize: 65, color: '#FFAE1F' }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                19 Siswa
              </Typography>
              <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                Total Telat
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              bgcolor: '#FBF2EF',
              height: 270,
              width: 'full',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', textAlign: 'center', height: '65%', alignItems: 'center' }}>
              <CancelIcon sx={{ fontSize: 65, color: '#DC3545' }} />
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                19 Siswa
              </Typography>
              <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                Total Alpha
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
