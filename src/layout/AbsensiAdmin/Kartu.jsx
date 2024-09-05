import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Chip, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  outline: "none",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "80%",
  bgcolor: "background.paper",
  border: "transparent",
  boxShadow: 24,
  p: 4,
};

export default function Kartu() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          width: "90%",
          display: "flex",
          ":hover": { bgcolor: "transparent" },
          ":active": { color: "transparent" },
          justifyItems: "start",
        }}
      >
        <Card
          sx={{
            width: "100%",
            boxShadow: "0px 4px 10px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              "& .MuiCardContent-root": { pb: 2 },
            }}
          >
            <CardContent>
              <Typography
                textTransform={"capitalize"}
                textAlign={"start"}
                component="div"
                variant="h5"
              >
                Jean Samuel Putra
              </Typography>
              <Box
                sx={{ width: "100%", display: "flex", justifyContent: "start" }}
              >
                <Chip
                  label="Izin"
                  sx={{
                    mt: 1,
                    backgroundColor: "#FFAE1F",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: 2,
                    px: 1,
                  }}
                />
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-nama" variant="p" fontSize={18}>
            Nama
          </Typography>
          <Typography
            id="modal-modal-nama-siswa"
            sx={{
              mb: 3,
              border: "2px solid #CED4DA",
              p: 1,
              borderRadius: 2,
              mt: 1,
            }}
          >
            Jean Samuel Putra
          </Typography>
          <Typography id="modal-modal-nama" variant="p" fontSize={18}>
            Tanggal
          </Typography>
          <Typography
            id="modal-modal-nama-siswa"
            sx={{
              mb: 3,
              border: "2px solid #CED4DA",
              p: 1,
              borderRadius: 2,
              mt: 1,
            }}
          >
            12-02-2024
          </Typography>
          <Typography id="modal-modal-nama" variant="p" fontSize={18}>
            Keterangan
          </Typography>
          <Typography
            id="modal-modal-nama-siswa"
            sx={{
              mb: 3,
              border: "2px solid #CED4DA",
              p: 1,
              height: 100,
              borderRadius: 2,
              mt: 1,
            }}
          >
            Jean Samuel Putra
          </Typography>

          <Typography id="modal-modal-gambar" variant="p" fontSize={18}>
            Bukti foto
          </Typography>
          <img
            src="https://plus.unsplash.com/premium_photo-1661398569556-8a9fe2c39ae4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[180px]"
            alt="Orang Sakit"
          />
          <Box
            className="button-wrapper"
            sx={{
              bgcolor: "white",
              pt: 10,
              display: "flex",
              justifyContent: "end",
              gap: 3,
            }}
          >
            <Button
              sx={{
                bgcolor: "#2D8EFF",
                color: "white",
                ":hover": { bgcolor: "#276BBB" },
                px: 2,
              }}
            >
              Izinkan
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                bgcolor: "#A3A3A3",
                color: "white",
                ":hover": { bgcolor: "#666666" },
                px: 2,
              }}
            >
              Tutup
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
