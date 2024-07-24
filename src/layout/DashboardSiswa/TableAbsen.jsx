import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function TableAbsen () {
    const data = [
      { hari: 'Senin', tanggal: '2024-07-22', absen: '08:00', pulang: '17:00', keterangan: 'Hadir', sia: '-' },
      { hari: 'Selasa', tanggal: '2024-07-23', absen: '08:10', pulang: '17:05', keterangan: 'Terlambat', sia: '-' },
      { hari: 'Rabu', tanggal: '2024-07-24', absen: '-', pulang: '-', keterangan: 'Sakit', sia: 'S' },
      // Tambahkan data lainnya sesuai kebutuhan
    ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: '#ADD8E6' }}>Hari</TableCell>
            <TableCell style={{ backgroundColor: '#ADD8E6' }}>Tanggal</TableCell>
            <TableCell style={{ backgroundColor: '#ADD8E6' }}>Absen</TableCell>
            <TableCell style={{ backgroundColor: '#ADD8E6' }}>Pulang</TableCell>
            <TableCell style={{ backgroundColor: '#ADD8E6' }}>S/I/A</TableCell>
            <TableCell style={{ backgroundColor: '#ADD8E6' }}>Keterangan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.hari}</TableCell>
              <TableCell>{row.tanggal}</TableCell>
              <TableCell>{row.absen}</TableCell>
              <TableCell>{row.pulang}</TableCell>
              <TableCell>{row.sia}</TableCell>
              <TableCell>{row.keterangan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

