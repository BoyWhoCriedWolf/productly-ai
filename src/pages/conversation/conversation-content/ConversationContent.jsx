import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Conversation from "./Conversation";

export default function ConversationContent({ data = [] }) {
  return (
    <Box
      sx={{ backgroundColor: (theme) => theme.palette.primary.contrastText }}
    >
      <Stack sx={{ py: 3, px: 3 }}>
        <Typography variant="h5"> All Conversation </Typography>
      </Stack>
      <Conversation data={data} />
    </Box>
  );
}
