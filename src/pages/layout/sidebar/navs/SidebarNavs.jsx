import React from 'react'
import SidebarNavItem from './SidebarNavItem'
import { Stack } from '@mui/material'

export default function SidebarNavs() {
    return (
        <Stack>
            {[
                { label: "Home" },
                { label: "All Feedback" },
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
