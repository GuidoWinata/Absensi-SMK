import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Card,
  CardContent,
  Grid,
  useMediaQuery,
  Box,
} from "@mui/material";
import client from "../../router/Client";

export default function TableRiwayat({ selectedDate }) {
  const [dataRiwayat, setDataRiwayat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Menentukan tanggal default jika selectedDate tidak ada
  const defaultDate = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD

  // Menentukan jika layar dalam mode mobile
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const dateToFetch = selectedDate || defaultDate;

    if (!dateToFetch) return;

    setLoading(true);

    client
      .get(`presensi?date=${dateToFetch}`)
      .then(({ data }) => {
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

          const waktuDatangFormatted = item.waktu_datang
            ? item.waktu_datang.substring(11, 16)
            : "Belum Absen";

          const waktuPulangFormatted = item.waktu_pulang
            ? item.waktu_pulang.substring(11, 16)
            : "Belum Pulang";

          return {
            ...item,
            hari: dayName,
            tanggal: dateObj.toLocaleDateString("id-ID"),
            waktu_datang: waktuDatangFormatted,
            waktu_pulang: waktuPulangFormatted,
          };
        });

        setDataRiwayat(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Gagal memuat data. Silakan coba lagi.");
        setLoading(false);
      });
  }, [selectedDate, defaultDate]);

  return (
    <>
      {loading ? (
        <Typography variant="h6" sx={{ textAlign: "center", padding: 2 }}>
          Memuat data...
        </Typography>
      ) : error ? (
        <Typography variant="h6" sx={{ textAlign: "center", padding: 2 }}>
          {error}
        </Typography>
      ) : dataRiwayat.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", padding: 2 }}>
          Data riwayat kosong
        </Typography>
      ) : isMobile ? (
        // Tampilan Card saat mobile
        <Grid container spacing={2} sx={{ padding: 2 }}>
          {dataRiwayat.map((row, index) => (
            <Grid item xs={12} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{row.hari}</Typography>
                  <Typography variant="body1">
                    Tanggal: {row.tanggal}
                  </Typography>
                  <Typography variant="body1">
                    Absen: {row.waktu_datang}
                  </Typography>
                  <Typography variant="body1">
                    Pulang: {row.waktu_pulang}
                  </Typography>
                  <Typography variant="body1">
                    Keterangan: {row.keterangan}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        // Tampilan Table saat bukan mobile
        <TableContainer
          component={Paper}
          sx={{ width: "100%", marginTop: 0, height: 300 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "#ADD8E6",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  Hari
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#ADD8E6",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  Tanggal
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#ADD8E6",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  Absen
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#ADD8E6",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  Pulang
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#ADD8E6",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  Keterangan
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataRiwayat.map((row, index) => (
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
      )}
    </>
  );
}
