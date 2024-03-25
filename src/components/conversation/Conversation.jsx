import { Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Conversation({ img = '', heading = '', title = '', description = '', user = '', org = '', update = '', status = '', color = '#8181A5', headingcolor = '#1C1D21', bgcolor = '#FFFFFF' }) {
  return (
    <Stack sx={{ backgroundcolor: bgcolor, color: { color }, padding: '10px 0 0 0' }}>
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={1}> {img} </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}>
          <Typography color={headingcolor}> {heading} </Typography>
          <Typography > {title} </Typography>
          <Typography > <u> {description} </u> </Typography>
        </Grid>
        <Grid item lg={1.5} md={1.5} sm={1.5} xs={1.5}> {user} </Grid>
        <Grid item lg={1.5} md={1.5} sm={1.5} xs={1.5}> {org} </Grid>
        <Grid item lg={1.5} md={1.5} sm={1.5} xs={1.5}> {update} </Grid>
        <Grid item lg={1.5} md={1.5} sm={1.5} xs={1.5}> {status} </Grid>
      </Grid>
      <Divider variant='middle' sx={{ paddingTop: '10px' }} />
    </Stack>
  );
}
