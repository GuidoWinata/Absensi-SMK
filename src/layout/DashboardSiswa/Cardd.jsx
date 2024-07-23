import { Box, Grid, Typography } from '@mui/material';
import Card from './ComponentCard/Kiri';
import Kanan from './ComponentCard/Kanan';

import React from 'react';

export default function Cardd() {
  return (
    <>
    <Box sx={{ width: 'full', minHeight: 80, mb: 4, display:'flex', alignItems:'center', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ mb: 0.9 }}>
          Selamat Datang!
        </Typography>
        <Typography color="gray">Hello Jean</Typography>
      </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ 
            flex: 1, 
            border: '1px solid #ddd', 
            borderRadius: 2, 
            p: 4,
            mb: 8,
            mx: 1, // margin horizontal
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <Card />
        </Box>
        <Box sx={{ 
            flex: 1, 
            border: '1px solid #ddd', 
            borderRadius: 2, 
            p: 4,
            mb: 8,
            mx: 1, // margin horizontal
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <Kanan />
        </Box>
        </Box>
    </>
  )
}
