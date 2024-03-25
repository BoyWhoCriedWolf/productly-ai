import { Typography } from '@mui/material';
import React from 'react';

export default function Button({ color = 'black', title = '', icon = '' }) {
  return (
    <button style={{ backgroundColor: color, borderRadius: '6px', borderColor: color, display: 'flex', justifyContent: "space-between" }} >
      <Typography sx={{ paddingTop: '5px' }} >
        {title}
      </Typography>
      <Typography sx={{ color: 'white', paddingTop: '2px' }} >
        {icon}
      </Typography>
    </button>
  );
}
