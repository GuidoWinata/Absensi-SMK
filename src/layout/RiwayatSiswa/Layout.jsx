
import { Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';

import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import TableRiwayat from './TableRiwayat';
import Card from './Card';
import Kalender from './Kalender';

export default function Layout() {
  return (
    <Box sx={{ height: '100vh' }}>
        <Box sx={{ height: '90px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4"  sx={{ mb: 0.9 }}>
                    Riwayat
                </Typography>
        </Box>
            <Grid container spacing={0} sx={{ height: '99%' }}>
                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{  height: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '3px', width: '99%',border: '1px', borderRadius: 2, boxShadow: '2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)', margin: '2px'}}>
                        <Card />
                    </Box>
                    <Box sx={{  height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '3px', width: '99%',border: '1px', borderRadius: 2, boxShadow: '2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)', margin: '2px'}}>
                        <Box sx={{  height: '49%', display: 'flex', paddingBottom: '3px', width: '95%',border: '1px', borderRadius: 2, boxShadow: '2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)', }}>
                            <TableRiwayat />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', height: '86.5%', alignItems: 'center', justifyContent: 'center', paddingBottom: '3px', width: '99%',border: '1px', borderRadius: 2, boxShadow: '2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)', }}>
                    <Kalender />
                </Grid>
            </Grid>
        </Box>
  )
}
