import { Box, Typography } from "@mui/material";
import React from "react";
import defaultIconPath from "../../../assets/img/icons/feedback.svg";
import { useNavigate } from "react-router-dom";

export default function SidebarNavItem({
  iconPath = defaultIconPath,
  isActive = false,
  label = "Nav Item Label",
  path = "",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        px: 2.5,
        py: 2,
        cursor: "pointer",
        borderRadius: (theme) => theme.shape.borderRadius / 6,
        display: "flex",
        alignItems: "center",
        gap: 2,

        ...(isActive
          ? {
              background: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.contrastText,
            }
          : {}),
      }}
    >
      <img src={iconPath} alt={label} />
      <Typography variant="body2">{label}</Typography>
    </Box>
  );
}
