import React, { useContext } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import { TanggalContext } from "./TanggalPIlih";

export default function KotakTiga() {
  const { selectedDate, setSelectedDate } = useContext(TanggalContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: {md:"40%", sm:"40%", xs:"20%"} }}
    >
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {isMobile ? (
            <DatePicker
              label="Pilih tanggal"
              value={selectedDate || null}
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              onChange={handleDateChange}
            />
          ) : (
            <DateCalendar
              value={selectedDate || null}
              sx={{
                transform: "scale(1.3)",
                bgcolor: "white",
                mt: 10,
                borderRadius: "6px",
              }}
              onChange={handleDateChange}
            />
          )}
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}
