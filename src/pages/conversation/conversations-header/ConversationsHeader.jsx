import { Add, Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React from "react";

export default function ConversationsHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pb: 4,
      }}
    >
      <Button color="secondary" variant="contained" endIcon={<Add />}>
        Add Feedback
      </Button>
      <div>
        <Button
          variant="outlined"
          startIcon={<Delete />}
          sx={{
            mr: 4,
            borderColor: (theme) => theme.palette.text.disabled,
            color: (theme) => theme.palette.primary.dark,
          }}
        ></Button>
        <FormControl sx={{ width: 37 }}>
          <Select
            displayEmpty
            input={<OutlinedInput />}
            sx={{
              height: 4,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            <MenuItem value="" disabled>
              <em>Sorted by most recent</em>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
