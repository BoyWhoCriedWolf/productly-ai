import { Box } from "@mui/material";
import React from "react";
import ConversationContent from "../conversation/conversation-content/ConversationContent";
import HomeHeader from "./home-header/HomeHeader";
import { AccountCircle, StackedBarChart } from "@mui/icons-material";

export default function Home() {
  return (
    <Box
      height="77vh"
      sx={{
        backgroundColor: (theme) => theme.palette.background.primary,
        px: 12,
        py: 6,
      }}
    >
      <HomeHeader
        data={[
          {
            icon: <AccountCircle color="primary" sx={{ fontSize: 70 }} />,
            totalNum: "281",
            description: "Total Conversation Tracked",
          },
          {
            icon: <StackedBarChart color="primary" sx={{ fontSize: 70 }} />,
            totalNum: "102",
            description: "Total User Tracked",
          },
        ]}
      />
      <ConversationContent
        data={[
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
        ]}
      />
    </Box>
  );
}
