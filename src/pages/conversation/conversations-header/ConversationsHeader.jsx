import { Add } from '@mui/icons-material';
import { Typography, Button } from '@mui/material';
import React from 'react';

export default function ConversationsHeader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
      <Button color="secondary" variant="contained" endIcon={<Add />} >Add Feedback</Button>
      <div>
        <span style={{ marginRight: '30px' }} > <Add fontSize='small' /> </span>
        <select name='conversation-sort'>
          <option> <Typography > <b> Sorted by most recent </b> </Typography></option>
        </select>
      </div>
    </div>
  );
}
