import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CONTENT_COLOR } from "../../../constants/color";
import Conversation from "./Conversation";

export default function ConversationContent({ data = [] }) {
  return (
    <Box sx={{ backgroundColor: CONTENT_COLOR }}>
      <Stack padding="20px 0 20px 30px">
        <Typography variant="h5"> All Conversation </Typography>
      </Stack>
      <Conversation data={data} />
    </Box>
  );
}
