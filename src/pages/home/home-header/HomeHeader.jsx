import { Stack } from "@mui/material";
import React from "react";
import HomeCard from "../../../../components/card/home-card/HomeCard";

export default function HomeHeader({ data = [] }) {
  return (
    <Stack sx={{ padding: "20px 10px" }}>
      {data.map((item, itemIndex) => {
        return (
          <div key={itemIndex}>
            <HomeCard
              icon={item?.icon}
              totalNum={item?.totalNum}
              description={item?.description}
            />
          </div>
        );
      })}
    </Stack>
  );
}
