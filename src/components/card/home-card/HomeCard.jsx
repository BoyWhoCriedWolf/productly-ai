import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function HomeCard({
  icon = "",
  totalNum = 0,
  description = "",
}) {
  return (
    <Stack
      sx={{
        borderRadius: 1,
        padding: (theme) => theme.spacing(1, 3),
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <Box paddingY={theme => theme.spacing(2)} paddingRight={theme => theme.spacing(12)}>{icon}</Box>
      <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h5" align="right">
          {totalNum}
        </Typography>
        <Typography align="right">{description}</Typography>
      </div>
    </Stack>
  );
}