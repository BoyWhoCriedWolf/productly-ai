import React from 'react'
import SidebarNavItem from './SidebarNavItem'
import { Stack } from '@mui/material'
import homeIcon from "../../../assets/img/icons/home.svg"
import feedbackIcon from "../../../assets/img/icons/feedback.svg"

export default function SidebarNavs() {
    return (
        <Stack>
            {[
                { label: "Home", icon: homeIcon },
                { label: "All Feedback", icon: feedbackIcon },
                { label: "Integration" },
                { label: "Slack Notification" },
                { label: "Contract Support" },
                { label: "Feedback settings" },
                { label: "All Feature Requests" },
                { label: "All Improvements" }
            ].map((navItem, navItemIndex) => {
                return <SidebarNavItem isActive={navItemIndex === 3} key={navItemIndex} label={navItem.label ?? ''} />
            })}
        </Stack>
    )
}
