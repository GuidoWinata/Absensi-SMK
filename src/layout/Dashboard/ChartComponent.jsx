import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Box, Typography } from '@mui/material';

Chart.register(...registerables);

const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['hadir', 'telat', 'ijin/sakit', 'alpha'],
          datasets: [{
            label: 'Rekap Kehadiran',
            data: [20, 5, 8, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow the chart to stretch to fill the container
          scales: {
            y: {
              beginAtZero: true,
              max: 40 // Set maximum value of y-axis to 36
            },
            x: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Cleanup chart on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Box sx={{ width: '100%', height: 700, position: 'relative' }}>
      <Box
        className="wrapper"
        sx={{
          mt: 8,
          width: 'full',
          height: 700,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ px: 10, pt: 5, width: '95%', height: '80%', borderRadius: 3, boxShadow: "0px 12px 30px 9px #DDE9F9", mt: 8, bgcolor:'white' }}>
            <Typography sx={{ fontSize: '1.9rem', fontWeight: 'bold', color: '#373D3F' }}>Bagan Harian Presensi</Typography>
            <Box sx={{height:'90%'}}>
            <canvas ref={chartRef} style={{
                width: '100%',
                height: '70%', // Mengurangi tinggi chart menjadi 70% dari container-nya
            }} />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChartComponent;
