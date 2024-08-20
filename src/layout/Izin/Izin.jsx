import React, { useState } from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  FormControl,
  FormLabel,
  Button,
  Input,
  Grid,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export const Izin = () => {
  const [name, setName] = useState("");
  const [nisn, setNisn] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Ijin");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("NISN:", nisn);
    console.log("Description:", description);
    console.log("Status:", status);
    console.log("Selected file:", file ? file.name : "No file selected");
    // Lakukan tindakan lain seperti mengirim data ke server
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <Grid
        sx={{
          border: "12px",
          borderRadius: 2,
          width: "67vh",
          height: "auto",
          boxShadow: "0px 0px 10px rgba(0.5, 0.1, 0.1, 0.1)",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 600,
            margin: "10px auto 0 auto",
            padding: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
            Form request Izin
          </Typography>
          <TextField
            label="Nama"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="NISN"
            variant="outlined"
            value={nisn}
            onChange={(e) => setNisn(e.target.value)}
            fullWidth
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Keterangan</FormLabel>
            <RadioGroup
              aria-label="keterangan"
              name="keterangan"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <FormControlLabel value="Ijin" control={<Radio />} label="Ijin" />
              <FormControlLabel
                value="Sakit"
                control={<Radio />}
                label="Sakit"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Deskripsi"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            minRows={6}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FormLabel component="legend">Lampiran</FormLabel>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="upload-file"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="upload-file">
              <Button component="span">
                <UploadFileIcon />
              </Button>
            </label>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Izin;
