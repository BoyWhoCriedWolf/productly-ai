import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function Conversation({
  img = "",
  heading = "",
  title = "",
  description = "",
  user = "",
  org = "",
  update = "",
  status = "",
}) {
  return (
    <Stack sx={{ backgroundColor: "#FFFFFF", padding: "10px 0 0 0" }}>
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <img
            src={img}
            alt="img"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              marginLeft: "56px",
            }}
          />
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}>
          <Typography variant="h5"> {heading} </Typography>
          <Typography> {title} </Typography>
          <Typography>
            <u>{description}</u>
          </Typography>
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <Typography>{user}</Typography>
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}>
          <Typography>{org}</Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={2} xs={2}>
          <Typography>{update}</Typography>
        </Grid>
        <Grid item lg={2} md={2} sm={2} xs={2}>
          <Typography>{status}</Typography>
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ paddingTop: "10px" }} />
    </Stack>
  );
}
