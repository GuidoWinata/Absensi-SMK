import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function TableRiwayat () {
    const data = [
      { hari: 'Senin', tanggal: '2024-07-22', absen: '08:00', pulang: '17:00', keterangan: 'Hadir', sia: '-' },
      { hari: 'Selasa', tanggal: '2024-07-23', absen: '08:10', pulang: '17:05', keterangan: 'Terlambat', sia: '-' },
      { hari: 'Rabu', tanggal: '2024-07-24', absen: '-', pulang: '-', keterangan: 'Sakit', sia: 'S' },
      { hari: 'Rabu', tanggal: '2024-07-24', absen: '-', pulang: '-', keterangan: 'Sakit', sia: 'S' },
      { hari: 'Rabu', tanggal: '2024-07-24', absen: '-', pulang: '-', keterangan: 'Sakit', sia: 'S' },
      // Tambahkan data lainnya sesuai kebutuhan
    ];

  return (
    <TableContainer component={Paper} sx={{ width: '100%', marginTop: 0, maxHeight: 360 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: '#ADD8E6', position: 'sticky', top: 0, zIndex: 1 }}>Hari</TableCell>
            <TableCell sx={{ backgroundColor: '#ADD8E6', position: 'sticky', top: 0, zIndex: 1 }}>Tanggal</TableCell>
            <TableCell sx={{ backgroundColor: '#ADD8E6', position: 'sticky', top: 0, zIndex: 1 }}>Absen</TableCell>
            <TableCell sx={{ backgroundColor: '#ADD8E6', position: 'sticky', top: 0, zIndex: 1 }}>Pulang</TableCell>
            <TableCell sx={{ backgroundColor: '#ADD8E6', position: 'sticky', top: 0, zIndex: 1 }}>S/I/A</TableCell>
            <TableCell sx={{ backgroundColor: '#ADD8E6', position: 'sticky', top: 0, zIndex: 1 }}>Keterangan</TableCell>
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
