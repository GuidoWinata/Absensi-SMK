import React, { useContext } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";
import { TanggalContext } from "./TanggalPIlih";

export default function KotakTiga() {
  const { setSelectedDate } = useContext(TanggalContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "40%" }}
    >
      <Grid item>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {isMobile ? (
            <DatePicker
              label="Pilih tanggal"
              slotProps={{
                textField: {
                  helperText: "MM/DD/YYYY",
                },
              }}
              onChange={handleDateChange}
            />
          ) : (
            <DateCalendar
              sx={{
                transform: "scale(1 .3)",
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
