import { Box, Stack, TextField, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper, Button, Chip } from '@mui/material';
import { Autocomplete, Input } from '@mui/joy';
import React, { useState } from 'react';
import { CssVarsProvider, extendTheme } from '@mui/joy';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import rows from '../../static/data';
import filter from '../../static/filter';

export default function Siswaadmin() {
  const [startDate, setStartDate] = useState(null);

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

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

  return (
    <>
      <Box sx={{ width: 'full', height: 900, mt: 10, px: 7 }}>
        <Stack direction="row" gap={3} justifyContent="end">
          <CssVarsProvider theme={theme}>
            <Autocomplete variant="soft" placeholder="Filter" options={filter} sx={{ width: 150, height: 55 }} />
          </CssVarsProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Pilih Tanggal"
              value={startDate}
              format="DD/MM/YYYY"
              onChange={(newValue) => setStartDate(newValue)}
              slots={{
                textField: (params) => (
                  <TextField
                    {...params}
                    sx={{
                      width: 190,
                      bgcolor: '#F0F4F8',
                      borderRadius: 2,
                      height: 55,
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          border: 'none',
                        },
                        '&:hover fieldset': {
                          border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                          border: 'none',
                        },
                      },
                      outline: 'none', // Removing the outline when focused
                    }}
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true, // Removing the underline
                    }}
                  />
                ),
              }}
            />
          </LocalizationProvider>
          <CssVarsProvider theme={theme}>
            <Input variant="soft" sx={{ width: 300 }} startDecorator={<SearchIcon />} placeholder="Cari" />
          </CssVarsProvider>
        </Stack>
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
    </>
  );
}
