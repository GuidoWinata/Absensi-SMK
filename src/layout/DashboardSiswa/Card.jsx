import { Box, Grid, Typography, Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import Jam from './ComponentCard/Jam'

export default function Card() {
  return (
    <>
    <Box sx={{ 
        width: 'full', 
        border: '1px', 
        borderRadius: 2, 
        p: 4,
        mb: 8,
        boxShadow: '0px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)'
      }}>
        <Box sx={{ 
            // width: '400px',
            minHeight: 80,
            mb: 8,
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',

        }}>
            <Box>
                <Typography variant="h4"  sx={{ mb: 0.9 }}>
                    Dalam satu semester
                </Typography>
                <Typography color="gray">Rekap Absensi</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relatives'
            }}>
                <Jam />
            </Box>
            <Box>

            </Box>
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="success">
            Absen
            </Button>
            <Button variant="contained" color="error">
            Pulang
            </Button>
          </Box>
        <Grid container spacing={7}>
          <Grid item xs={4}>
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
                  1
                </Typography>
                <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                  Total Ijin
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
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
                  0
                </Typography>
                <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                  Total Sakit
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
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
                  2
                </Typography>
                <Typography variant="p" fontWeight="semibold" color="#5A6A85">
                  Total Alpha
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
