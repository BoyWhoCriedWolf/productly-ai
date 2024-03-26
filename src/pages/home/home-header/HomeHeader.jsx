import { Grid } from "@mui/material";
import React from "react";
import HomeCard from "../../../components/card/home-card/HomeCard";

export default function HomeHeader({ data = [] }) {
  return (
    <Grid container spacing={5} sx={{ py: 3 }}>
      {data.map((item, itemIndex) => {
        return (
          <Grid item lg={6} md={6} sm={6} xs={6} key={itemIndex}>
            <HomeCard
              icon={item?.icon}
              totalNum={item?.totalNum}
              description={item?.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
