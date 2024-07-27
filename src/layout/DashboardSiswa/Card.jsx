/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Grid, Typography } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedCardBox = styled(Box)`
  animation: ${slideInRight} 0.5s ease-out;
`;

export default function Card() {
  return (
    <AnimatedCardBox sx={{ 
        width: 'full', 
        border: '1px', 
        borderRadius: 2, 
        p: 4,
        pt: 0,
        mb: 8,
        boxShadow: '2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)',
      }}>
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
                <Typography fontWeight="semibold" color="#5A6A85">
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
                <Typography fontWeight="semibold" color="#5A6A85">
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
                <Typography fontWeight="semibold" color="#5A6A85">
                  Total Alpha
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </AnimatedCardBox>
  );
}
