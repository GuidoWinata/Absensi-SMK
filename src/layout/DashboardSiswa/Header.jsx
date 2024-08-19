import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Jam from "./ComponentCard/Jam"; // Assuming Jam is your component
import client from "../../router/Client";

import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import jam icon

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const flyLeft = keyframes`
  0% { transform: translateX(0); opacity: 0; }
  50% { transform: translateX(-20px); opacity: 1; }
  100% { transform: translateX(0); opacity: 0; }
`;

const flyRight = keyframes`
  0% { transform: translateX(0); opacity: 0; }
  50% { transform: translateX(20px); opacity: 1; }
  100% { transform: translateX(0); opacity: 0; }
`;

const AnimatedCardBox = styled(Box)`
  animation: ${slideInDown} 0.5s ease-out;
  position: relative;
`;

const CircleIcon = styled(Box)`
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.size === "large" ? "80px" : "60px"}; /* 4x for large, 3x for medium */
  height: ${(props) => (props.size === "large" ? "80px" : "60px")};
  background-color: #2d8eff;
  animation: ${(props) => (props.left ? flyLeft : flyRight)} 2s infinite;
  animation-delay: 0.5s;
  svg {
    color: white;
    font-size: ${(props) => (props.size === "large" ? "40px" : "30px")};
  }
`;

const AbsenButton = styled.button`
  padding: 16px;
  border-radius: 30px;
  width: 300px;
  height: 100px;
  font-size: 24px;
  background-color: ${(props) =>
    props.absenStatus === "datang"
      ? "#FFA500" // Warna oranye untuk status "Pulang"
      : props.disabled
      ? "#999999" // Warna abu-abu saat tombol dinonaktifkan
      : "#1e88e5"}; // Warna biru untuk status "Datang"
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, cursor 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Card() {
  const [isAbsen, setIsAbsen] = useState(true);
  const [absenStatus, setAbsenStatus] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const clearLocalStorageAt5AM = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      if (hours === 5 && minutes === 0) {
        localStorage.removeItem("status");
        localStorage.removeItem("absenTime");
      }
    };

    // Cek status absen saat ini
    const checkAbsenStatus = () => {
      const savedStatus = localStorage.getItem("status");
      const savedTime = localStorage.getItem("absenTime");

      if (savedStatus && savedTime) {
        setAbsenStatus(savedStatus);
      }
    };

    // Cek status saat komponen dimuat
    checkAbsenStatus();

    // Set interval untuk memeriksa setiap menit
    const intervalId = setInterval(() => {
      clearLocalStorageAt5AM();
    }, 60000); // Cek setiap menit

    // Hapus interval saat komponen tidak digunakan
    return () => clearInterval(intervalId);
  }, []);

  const handleAbsen = (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    const currentTime = new Date().getTime();

    client
      .post("absen")
      .then(({ data }) => {
        const absenStatus = data.message;
        console.log(data);
        if (absenStatus === "Berhasil Absen Datang") {
          setIsAbsen(!isAbsen);
          setAbsenStatus("datang");
          localStorage.setItem("absenTime", currentTime);
          localStorage.setItem("status", "datang");
        } else if (absenStatus === "Berhasil Absen Pulang") {
          setAbsenStatus("pulang");
          localStorage.setItem("status", "pulang");
          localStorage.setItem("absenTime", currentTime);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorMessage = error.response.data.message;
          console.error("Error Message:", errorMessage);
          alert(`${errorMessage}`);
        } else {
          console.error("An unexpected error occurred:", error);
          alert("An unexpected error occurred. Please try again.");
        }
      })
      .finally(() => {
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 20000);
      });
  };

  return (
    <AnimatedCardBox
      sx={{
        minHeight: "68vh",
        mb: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CircleIcon sx={{ top: "10%", left: "10%" }} left size="large">
        <AccessTimeIcon />
      </CircleIcon>
      <CircleIcon sx={{ top: "30%", left: "90%" }} size="large">
        <AccessTimeIcon />
      </CircleIcon>
      <CircleIcon sx={{ top: "50%", left: "15%" }} left size="medium">
        <AccessTimeIcon />
      </CircleIcon>
      <CircleIcon sx={{ top: "70%", left: "85%" }} size="medium">
        <AccessTimeIcon />
      </CircleIcon>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" sx={{ mb: 0.9, paddingRight: "3px" }}>
            Hi!
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 0.9 }}
            className="typing-animation"
          >
            {localStorage.getItem("nama")}
          </Typography>
        </Box>
        <Typography color="gray" variant="body1">
          Sudah absen blum?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <Box>
          <Jam />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "4px" }}
        >
          {absenStatus === "pulang" ||
          localStorage.getItem("status") === "pulang" ? (
            <div className="text-center text-xl text-green-600">
              Anda sudah absen hari ini
            </div>
          ) : (
            <AbsenButton
              onClick={handleAbsen}
              disabled={isButtonDisabled}
              absenStatus={absenStatus}
            >
              {absenStatus === "datang" ||
              localStorage.getItem("status") === "datang"
                ? "Pulang"
                : "Datang"}
            </AbsenButton>
          )}
        </Box>
        <Typography
          sx={{ display: "flex", justifyContent: "center", paddingTop: "20px" }}
        >
          Absen kamu akan disesuaikan dengan waktu yang tertera!
        </Typography>
      </Box>
    </AnimatedCardBox>
  );
}
