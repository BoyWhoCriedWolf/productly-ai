import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

export default function Integrations() {
  return (
    <Paper
      sx={{
        backgroundColor: (theme) => theme.palette.background.primary,
        px: 12,
        py: 6,
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.contrastText,
          p: 4,
        }}
      >
        <Stack display="flex" justifyContent="flex-start" flexDirection="row">
          <Typography variant="h5">Call Title</Typography>
          <Typography variant="h5" color={"lightDark"}>
            (x)
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
}
