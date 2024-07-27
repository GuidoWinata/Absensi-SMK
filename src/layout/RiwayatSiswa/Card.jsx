import { Box, Grid, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';

export default function Card() {
  return (
    <Grid container spacing={2} sx={{ padding: '20px' }}>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            bgcolor: '#DDE9F9',
            height: 270,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            p: 2
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
            <EventAvailableIcon sx={{ fontSize: 65, color: '#2D8EFF' }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              1
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Ijin
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            bgcolor: '#E6FFFA',
            height: 270,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            p: 2
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 65, color: '#00D8B6' }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              0
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Sakit
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box
          sx={{
            bgcolor: '#FEF5E5',
            height: 270,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            p: 2
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ fontSize: 65, color: '#FFAE1F' }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              2
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Alpha
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
