import { Stack, Typography } from "@mui/material";
import React from "react";

export default function HomeCard({
  icon = "",
  totalNum = 0,
  description = "",
}) {
  return (
    <Stack
      sx={{
        borderRadius: "8px",
        padding: "20px 10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{icon}</span>
      <span>
        <Typography>{totalNum}</Typography>
        <Typography>{description}</Typography>
      </span>
    </Stack>
  );
}
