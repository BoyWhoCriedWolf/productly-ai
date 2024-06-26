import { Paper } from "@mui/material";
import React from "react";
import call_img1 from "../../assets/img/feedback/call_img1.png";
import call_img2 from "../../assets/img/feedback/call_img2.png";
import ConversationContent from "./conversation-content/ConversationContent";
import ConversationsHeader from "./conversations-header/ConversationsHeader";

export default function Conversations() {
  return (
    <Paper
      width="90%"
      sx={{
        backgroundColor: (theme) => theme.palette.background.primary,
        px: 12,
        py: 6,
        height: "100%",
      }}
    >
      <ConversationsHeader />
      <ConversationContent
        data={[
          {
            img: call_img1,
            heading: "Call Title",
            title: "Call Summary",
            description: "see all the 18 product insights",
            user: "Aaran",
            org: "Meta",
            update: "Today at 9 pm",
            status: "Under Developer",
          },
          {
            img: call_img2,
            heading: "Call Title",
            title: "Call Summary",
            description: "see all the 18 product insights",
            user: "Aaran",
            org: "",
            update: "Today at 10 pm",
            status: "Under Developer",
          },
        ]}
      />
    </Paper>
  );
}
