import React from 'react';
import Kartu from '../../layout/AbsensiAdmin/Kartu';
import { Grid } from '@mui/material';

export default function Absensimin() {
  return (
    <>
      <Grid container spacing={3} mt={7} sx={{ px: 10, '& .MuiGrid-item': { paddingLeft: 0 } }}>
        <Grid item xs={3}>
          <Kartu />
        </Grid>
        <Grid item xs={3}>
          <Kartu />
        </Grid>
        <Grid item xs={3}>
          <Kartu />
        </Grid>
        <Grid item xs={3}>
          <Kartu />
        </Grid>
        <Grid item xs={3}>
          <Kartu />
        </Grid>
      </Grid>
    </>
  );
}
