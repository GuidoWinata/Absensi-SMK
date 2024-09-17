import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Chip, Modal } from "@mui/material";
import PropTypes from "prop-types";
import client from "../../router/Client";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  outline: "none",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "85%",
  bgcolor: "background.paper",
  border: "transparent",
  boxShadow: 24,
  p: 4,
};

Kartu.propTypes = {
  id: PropTypes.number.isRequired,
  nama: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
  keterangan: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  gambar: PropTypes.string.isRequired,
};

export default function Kartu(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageUrl = "http://localhost:8000/storage/uploads/" + props.gambar;

  const handleApprove = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (props.keterangan === "dispen") {
        response = await client.put(`dispen/${props.id}`);
        alert("Berhasil approve dispen");
      } else if (props.keterangan === "izin") {
        response = await client.put(`izin/${props.id}`);
        alert("Berhasil approve izin atau sakit");
      } else {
        alert("GOBLOK!!");
      }

      console.log(response.data);

      // Update UI di sini tanpa reload page jika memungkinkan
      // Jika memang harus reload, bisa pakai ini:
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menyetujui.");
    }
  };

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
                {props.nama}
              </Typography>
              <Typography
                textTransform={"capitalize"}
                textAlign={"start"}
                component="div"
                variant="p"
              >
                {props.deskripsi}
              </Typography>

              <Box
                sx={{ width: "100%", display: "flex", justifyContent: "start" }}
              >
                <Chip
                  label={props.keterangan}
                  sx={{
                    mt: 1,
                    backgroundColor:
                      props.keterangan === "izin"
                        ? "#00D8B6"
                        : props.keterangan === "dispen"
                        ? "#4B0082"
                        : "#00D8B6",
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
          <div className="flex justify-center items-center">
            <h1
              className={`text-3xl text-center text-white font-bold w-[140px] p-2 rounded-lg 
  ${
    props.keterangan === "izin"
      ? "bg-[#00D8B6]"
      : props.keterangan === "dispen"
      ? "bg-[#4B0082]"
      : "bg-[#00D8B6]"
  }`}
            >
              {props.keterangan.toUpperCase()}
            </h1>
          </div>
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
            {props.nama}
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
            {props.tanggal}
          </Typography>

          <Typography id="modal-modal-nama" variant="p" fontSize={18}>
            Deskripsi
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
            {props.deskripsi}
          </Typography>

          <Typography id="modal-modal-gambar" variant="p" fontSize={18}>
            Bukti foto
          </Typography>

          {/* Gunakan props.gambar dengan URL dinamis */}
          <img src={imageUrl} className="h-[140px]" alt="Bukti foto" />

          <Box
            className="button-wrapper"
            sx={{
              // bgcolor: "white",
              display: "flex",
              justifyContent: "end",
              gap: 3,
            }}
          >
            <Button
              onClick={handleApprove}
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
