import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Conversation from "../../../components/conversation/Conversation";
import { CONTENT_COLOR } from "../../../constants/color";

export default function ConversationContent({ data = [] }) {
  return (
    <Box sx={{ backgroundColor: CONTENT_COLOR }}>
      <Stack padding="20px 0 20px 30px">
        <Typography variant="h5"> All Conversation </Typography>
      </Stack>
      <Stack
        padding="20px 0 20px 40px"
        sx={{ backgroundColor: "#F5F5FA66", opacity: 40, paddingRight: "40px" }}
      >
        <Grid container>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography>Conversation</Typography>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Typography>User</Typography>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <Typography>Org</Typography>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Typography>Last Update</Typography>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2}>
            <Typography>Status</Typography>
          </Grid>
        </Grid>
      </Stack>
      <Stack padding="10px 30px">
        {data.map((item, itemIndex) => {
          return (
            <div key={itemIndex}>
              <Conversation
                img={item?.img}
                heading={item?.heading}
                title={item?.title}
                description={item?.description}
                user={item?.user}
                org={item?.org}
                update={item?.update}
                status={item?.status}
              />
            </div>
          );
        })}
      </Stack>
    </Box>
  );
}
