import { Box } from "@mui/material";
import React from "react";
import ConversationContent from "../conversation/conversation-content/ConversationContent";
import HomeHeader from "./home-header/HomeHeader";

export default function Home() {
  const home_data = [
    {
      img: "",
      heading: "",
      title: "Conversations",
      description: "",
      user: "User",
      org: "Org",
      update: "Last Update",
      status: "Status",
      bgcolor: "#F5F5FA66",
    },
    {
      img: "",
      heading: "Call Title",
      title: "Call Summary",
      description: "see all the 18 product insights",
      user: "Aaran",
      org: "Meta",
      update: "Today at 9 pm",
      status: "Under Developer",
    },
    {
      img: "",
      heading: "Call Title",
      title: "Call Summary",
      description: "see all the 18 product insights",
      user: "Aaran",
      org: "",
      update: "Today at 9 pm",
      status: "Under Developer",
    },
  ];

  return (
    <Box
      height="77vh"
      width="100%"
      padding="50px 100px"
      sx={{ backgroundColor: (theme) => theme.palette.backgroundColor.primary }}
    >
      <HomeHeader />
      <ConversationContent data={home_data} />
    </Box>
  );
}
