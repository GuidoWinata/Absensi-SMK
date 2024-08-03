/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Jam from './ComponentCard/Jam'; // Assuming Jam is your component

import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Import jam icon

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
  width: ${props => (props.size === 'large' ? '80px' : '60px')}; /* 4x for large, 3x for medium */
  height: ${props => (props.size === 'large' ? '80px' : '60px')};
  background-color: #2D8EFF;
  animation: ${props => (props.left ? flyLeft : flyRight)} 2s infinite;
  animation-delay: 0.5s;
  svg {
    color: white;
    font-size: ${props => (props.size === 'large' ? '40px' : '30px')};
  }
`;

export default function Card() {
  const [isAbsen, setIsAbsen] = useState(true);

  const handleButtonClick = () => {
    setIsAbsen(!isAbsen);
  };

  return (
    <AnimatedCardBox sx={{ 
      minHeight: '68vh',
      mb: 8,
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
    }}>
      <CircleIcon sx={{ top: '10%', left: '10%' }} left size="large">
        <AccessTimeIcon />
      </CircleIcon>
      <CircleIcon sx={{ top: '30%', left: '90%' }} size="large">
        <AccessTimeIcon />
      </CircleIcon>
      <CircleIcon sx={{ top: '50%', left: '15%' }} left size="medium">
        <AccessTimeIcon />
      </CircleIcon>
      <CircleIcon sx={{ top: '70%', left: '85%' }} size="medium">
        <AccessTimeIcon />
      </CircleIcon>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant="h5" sx={{ mb: 0.9, paddingRight: '3px' }}>
            Hi!  
          </Typography>
          <Typography variant="h5" sx={{ mb: 0.9 }} className="typing-animation">
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
        position: 'relative',
        flexDirection: 'column'
      }}>
        <Box>
          <Jam />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
          <button className={`px-4 py-2 rounded-[30px] ${isAbsen ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'} w-[300px] h-[100px] text-3xl`}
            onClick={handleButtonClick}>
            {isAbsen ? 'Datang' : 'Pulang'}
          </button>
        </Box>
        <Typography sx={{display:'flex', justifyContent: 'center', paddingTop: '20px'}}>
          Absen kamu akan disesuaikan dengan waktu yang tertera!
        </Typography>
      </Box>
    </AnimatedCardBox>
  );
}
