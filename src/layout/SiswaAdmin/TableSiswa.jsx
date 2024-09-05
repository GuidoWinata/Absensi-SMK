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
      <Box sx={{ width: 'full', height: 900 }}>        
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table sx={{ minWidth: 250 }}>
            <TableHead sx={{ bgcolor: '#DDE9F9', '& .MuiTableCell-root': { fontWeight: 600, width: 900, fontSize: '19px', color: '#32383E' } }}>
              <TableRow>
                <TableCell align="center">NISN</TableCell>
                <TableCell align="center">Nama</TableCell>
                <TableCell align="center">Tanggal Lahir</TableCell>
                <TableCell align="center">Jenis Kelamin</TableCell>
                <TableCell align="center">No HP</TableCell>
                <TableCell align="center">Kelas</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ '& .MuiTableCell-root': { fontSize: '18px' }, '& .MuiChip-root': { fontSize: '18px', width: 90, fontWeight: 'bold', borderRadius: 2 } }}>
              {paginatedRows.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">{row.nisn}</TableCell>
                  <TableCell align="center">{row.nama}</TableCell>
                  <TableCell align="center">{row.tglLhir}</TableCell>
                  <TableCell align="center">{row.jenkel}</TableCell>
                  <TableCell align="center">{row.nohp}</TableCell>
                  <TableCell align="center">{row.kelas}</TableCell>
                  <TableCell align="center">
                    <button>hapus</button>
                    <button>edit</button>
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
