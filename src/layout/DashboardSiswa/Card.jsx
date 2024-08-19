/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React, { useEffect, useState } from "react";
import client from "../../router/Client";

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedCardBox = styled(Box)`
  animation: ${slideInRight} 0.5s ease-out;
`;

export default function Card() {
  const [countSakit, setCountSakit] = useState("");
  const [countIzin, setCountIzin] = useState("");
  const [alphaCount, setAlphaCount] = useState("");

  useEffect(() => {
    client.get("sakit").then(({ data }) => {
      const count = data.data.length;
      setCountSakit(count);
    });

    client.get("izin").then(({ data }) => {
      const count = data.data.length;
      setCountIzin(count);
    });

    client.get("absen").then(({ data }) => {
      const alphaCount = data.data.filter(
        (item) => item.keterangan === "alpha"
      ).length;
      setAlphaCount(alphaCount);
    });
  }, []);

  return (
    <AnimatedCardBox sx={{ paddingBottom: "40px" }}>
      <Grid container spacing={7}>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: "#DDE9F9",
              height: 270,
              width: "full",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                textAlign: "center",
                height: "65%",
                alignItems: "center",
              }}
            >
              <EventAvailableIcon sx={{ fontSize: 65, color: "#2D8EFF" }} />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {countIzin}
              </Typography>
              <Typography fontWeight="semibold" color="#5A6A85">
                Total Ijin
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: "#E6FFFA",
              height: 270,
              width: "full",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                textAlign: "center",
                height: "65%",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 65, color: "#00D8B6" }} />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {countSakit}
              </Typography>
              <Typography fontWeight="semibold" color="#5A6A85">
                Total Sakit
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              bgcolor: "#FEF5E5",
              height: 270,
              width: "full",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                textAlign: "center",
                height: "65%",
                alignItems: "center",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 65, color: "#FFAE1F" }} />
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {alphaCount}
              </Typography>
              <Typography fontWeight="semibold" color="#5A6A85">
                Total Alpha
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AnimatedCardBox>
  );
}
