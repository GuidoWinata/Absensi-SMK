import { Box, Grid, Typography, Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoneIcon from '@mui/icons-material/Done';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react';
import {useState} from 'react';
import Jam from './ComponentCard/Jam'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

export default function Card() {

  const [isAbsen, setIsAbsen] = useState(true);

  const handleButtonClick = () => {
    setIsAbsen(!isAbsen);
  };

  return (
    <>
        <Box sx={{ 
            // width: '1190px',
            minHeight: '68vh',
            mb: 8,
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            // justifyContent: 'space-between',

        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box sx={{display: 'flex'}}>
              <Typography variant="h5" sx={{ mb: 0.9 , paddingRight: '3px'}}>
                Hi!  
              </Typography>
              <Typography variant="h5" sx={{ mb: 0.9 }}  className="typing-animation">
                Jean Samuel Putra
              </Typography>
              </Box>
              <Typography color="gray" variant="body1">
                Sudah absen blum?
              </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relatives',
                flexDirection: 'column'
            }}>
            <Box>
              <Jam />
            </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '4px',}}>
                  <button className={`px-4 py-2 rounded-[30px] ${ isAbsen ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white' } w-[300px] h-[100px] text-3xl`}
                    onClick={handleButtonClick}>
                    {isAbsen ? 'Absen' : 'Pulang'}
                  </button>
                </Box>
            </Box>
        </Box>
    </>
  );
}
