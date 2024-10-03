import { Box, Grid, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useEffect, useState } from "react";
import client from "../../router/Client";

export default function Card() {
  const [izinCount, setIzinCount] = useState("");
  const [sakitCount, setSakitCount] = useState("");
  const [alphaCount, setAlphaCount] = useState("");

  useEffect(() => {
    client.get("izin").then(({ data }) => {
      setIzinCount(data.data.length);
    });

    client.get("sakit").then(({ data }) => {
      setSakitCount(data.data.length);
    });

    client.get("absen").then(({ data }) => {
      const alphaCount = data.data.filter(
        (item) => item.keterangan === "alpha"
      ).length;

      setAlphaCount(alphaCount);
    });
  }, []);
  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      <Grid item sm={4}>
        <Box
          sx={{
            bgcolor: "#DDE9F9",
            height: 270,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <EventAvailableIcon sx={{ fontSize: 65, color: "#2D8EFF" }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {izinCount}
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Ijin
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={4}>
        <Box
          sx={{
            bgcolor: "#E6FFFA",
            height: 270,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 65, color: "#00D8B6" }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {sakitCount}
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Sakit
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item sm={4}>
        <Box
          sx={{
            bgcolor: "#FEF5E5",
            height: 270,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 65, color: "#FFAE1F" }} />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {alphaCount}
            </Typography>
            <Typography variant="body1" fontWeight="semibold" color="#5A6A85">
              Total Alpha
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
