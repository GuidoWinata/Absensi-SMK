import React from 'react';
import Header from '../../layout/Dashboard/Header';
import { Box } from '@mui/material';
import Card from '../../layout/Dashboard/Card';
import Kotak from '../../layout/Dashboard/Kotak';

export default function Dashadmin() {
  return (
    <>
      <Box sx={{ width: 'full', px: 5, mt: 6 }}>
        <Header />
        <Card />
        <Kotak />
      </Box>
    </>
  );
}
