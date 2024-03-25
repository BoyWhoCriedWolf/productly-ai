import { Grid } from '@mui/material';
import React from 'react';
import SearchBox from '../../components/search-box';

export default function Header() {
  return (
    <Grid container justifyContent="end">
      <Grid item >
        <SearchBox />
      </Grid>
    </Grid>
  );
}
