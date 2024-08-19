import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import client from "../../router/Client";

export default function TableAbsen() {
  const [presensi, setPresensi] = useState([]);

  useEffect(() => {
    client.get("absen").then(({ data }) => {
      // Tambahkan properti hari berdasarkan tanggal
      const updatedData = data.data.map((item) => {
        const dateObj = new Date(item.tanggal);
        const days = [
          "Minggu",
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu",
        ];
        const dayName = days[dateObj.getDay()];

        // Format waktu_datang menjadi hanya "HH:mm"
        const waktuDatangFormatted = item.waktu_datang.substring(11, 16);

        // Format waktu_pulang menjadi hanya "HH:mm"
        const waktuPulangFormatted = item.waktu_pulang
          ? item.waktu_pulang.substring(11, 16)
          : "Belum Pulang";

        return {
          ...item,
          hari: dayName,
          waktu_datang: waktuDatangFormatted,
          waktu_pulang: waktuPulangFormatted,
        };
      });

      setPresensi(updatedData);
    });
  }, []);

  return (
    <Box
      sx={{
        width: "full",
        border: "1px",
        borderRadius: 2,
        p: 4,
        pt: 0,
        mb: 8,
        boxShadow: "2px 4px 8px rgba(0.5, 0.1, 0.1, 0.1)",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ paddingTop: "20px", bgcolor: "transparent" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>Hari</TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>
                Tanggal
              </TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>
                Absen
              </TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>
                Pulang
              </TableCell>
              <TableCell style={{ backgroundColor: "#ADD8E6" }}>
                Keterangan
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {presensi.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.hari}</TableCell>
                <TableCell>{row.tanggal}</TableCell>
                <TableCell>{row.waktu_datang}</TableCell>
                <TableCell>{row.waktu_pulang}</TableCell>
                <TableCell>{row.keterangan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
