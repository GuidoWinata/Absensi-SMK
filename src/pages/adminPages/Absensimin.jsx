import React, { useEffect, useState } from "react";
import Kartu from "../../layout/AbsensiAdmin/Kartu";
import { Grid } from "@mui/material";
import client from "../../router/Client";

export default function Absensimin() {
  const [dataAbsen, setDataAbsen] = useState([]);
  useEffect(() => {
    client.get("absen").then(({ data }) => {
      console.log(data.data);
      // console.log(data.data.image[0]);

      setDataAbsen(data.data);
    });
  }, []);
  return (
    <>
      <Grid
        container
        spacing={3}
        mt={7}
        sx={{ px: 10, "& .MuiGrid-item": { paddingLeft: 0 } }}
      >
        {dataAbsen.map((absen, index) => (
          <Grid item xs={3} key={index}>
            <Kartu
              id={absen.id}
              nama={absen.siswa.nama}
              tanggal={absen.tanggal}
              deskripsi={absen.deskripsi}
              keterangan={absen.keterangan}
              gambar={absen.image.file_name}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
