import React from "react";
import SidebarNavItem from "./SidebarNavItem";
import { Stack } from "@mui/material";
import homeIcon from "../../../assets/img/icons/home.svg";
import feedbackIcon from "../../../assets/img/icons/feedback.svg";
import { useLocation } from "react-router-dom";

export default function SidebarNavs() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Stack>
      {[
        { label: "Home", icon: homeIcon, path: "/" },
        { label: "All Feedback", icon: feedbackIcon, path: "/conversations" },
        { label: "Integration", path: "/integrations" },
        { label: "Slack Notification" },
        { label: "Contract Support" },
        { label: "Feedback settings" },
        { label: "All Feature Requests" },
        { label: "All Improvements" },
      ].map((navItem, navItemIndex) => {
        return (
          <SidebarNavItem
            isActive={navItem.path === pathname}
            key={navItemIndex}
            label={navItem.label ?? ""}
            path={navItem.path ?? ""}
          />
        );
      })}
    </Stack>
  );
}
