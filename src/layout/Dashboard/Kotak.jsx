import { Box, Grid, Table, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Button, IconButton  } from '@mui/material';
import { Autocomplete, Input } from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import filter from '../../static/filter';
import rows from '../../static/data';
import { React, useState, useRef } from 'react';
import Slider from 'react-slick';
import ChartComponent from './ChartComponent';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Kotak() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 4;

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);

  const theme = extendTheme({
    components: {
      JoyAutocomplete: {
        defaultProps: {
          variant: 'soft',
        },
      },
      JoyInput: {
        defaultProps: {
          variant: 'soft',
        },
      },
    },
  });

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // Matikan arrow default dari slick
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
     <Box sx={{ width: '100%', position: 'relative' }}>
        <Slider {...settings} ref={sliderRef}>
          <Box sx={{ display: 'flex'}}>
            <Grid item xs={6}>
              <Box
                className="wrapper"
                sx={{
                  mt: 8,
                  width: 'full',
                  height: 700,
                  display: 'flex',
                  justifyContent:'center'
                }}>
                <Box sx={{ px: 10, pt: 5, width: '95%', height: 550, borderRadius: 3, bgcolor:'white', boxShadow: "0px 12px 30px 9px #DDE9F9", mt: 8 }}>
                <Box sx={{ display: 'flex', justifyContent: 'end', width: 'full', gap: 3 }}>
                  <CssVarsProvider theme={theme}>
                    <Autocomplete variant="soft" placeholder="Filter" options={filter} sx={{ width: 150, height: 47 }} />
                    <Input variant="soft" sx={{ width: 300 }} startDecorator={<SearchIcon />} placeholder="Cari" />
                  </CssVarsProvider>
                </Box>
                  <Typography sx={{ fontSize: '1.9rem', fontWeight: 'bold', color: '#373D3F' }}>Rekap Presensi Siswa</Typography>
                  <TableContainer component={Paper} sx={{ mt: 4 }}>
                    <Table sx={{ minWidth: 250 }}>
                      <TableHead sx={{ bgcolor: '#DDE9F9', '& .MuiTableCell-root': { fontWeight: 600, width: 900, fontSize: '19px', color: '#32383E' } }}>
                        <TableRow>
                          <TableCell align="center">Nama</TableCell>
                          <TableCell align="center">Tanggal</TableCell>
                          <TableCell align="center">Keterangan</TableCell>
                          <TableCell align="center">Hadir</TableCell>
                          <TableCell align="center">Pulang</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{ '& .MuiTableCell-root': { fontSize: '18px' }, '& .MuiChip-root': { fontSize: '18px', width: 90, fontWeight: 'bold', borderRadius: 2 } }}>
                        {paginatedRows.map((row, index) => (
                          <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">{row.nama}</TableCell>
                            <TableCell align="center">{row.tanggal}</TableCell>
                            <TableCell align="center">
                              <Chip
                                label={row.keterangan}
                                sx={{
                                  width: 90,
                                  backgroundColor: row.keterangan === 'Alpha' ? '#FBF2EF' : row.keterangan === 'Hadir' ? '#E6FFFA' : row.keterangan === 'Telat' ? '#FEF5E5' : '#555E68',
                                  color: row.keterangan === 'Alpha' ? '#DC3545' : row.keterangan === 'Hadir' ? '#00D8B6' : row.keterangan === 'Telat' ? '#FFAE1F' : '#555E68',
                                }}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Chip
                                label={row.hadir}
                                sx={{
                                  backgroundColor: row.hadir === 'Tdk Absen' ? '#FBF2EF' : '#DDE9F9',
                                  color: row.hadir === 'Tdk Absen' ? '#DC3545' : '#2D8EFF',
                                }}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Chip
                                label={row.pulang}
                                sx={{
                                  backgroundColor: row.pulang === 'Tdk Absen' ? '#FBF2EF' : '#DDE9F9',
                                  color: row.pulang === 'Tdk Absen' ? '#DC3545' : '#2D8EFF',
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box sx={{ display: 'flex', width: 180, justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="contained" onClick={() => handleChangePage(page > 0 ? page - 1 : 0)} disabled={page === 0}>
                      Prev
                    </Button>
                    <Button variant="contained" onClick={() => handleChangePage(page < Math.ceil(rows.length / rowsPerPage) - 1 ? page + 1 : page)} disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}>
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
              </Grid>
                <Grid item xs={6}>
              </Grid>
            </Box>
            <Box p={2}>
              <ChartComponent />
            </Box>
          </Slider>
          <IconButton
        onClick={handlePrev}
        sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
        </Box> 
    </>
  );
}
