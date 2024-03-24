import { Box, Stack } from '@mui/material'
import React from 'react'
import SidebarHeader from './header'
import SidebarNavs from './navs'
import SidebarFooter from './footer'

export default function Sidebar() {
    return (
        <Stack sx={{ height: "100%", mt: 5, mb: 7, mx: 2.5 }}>
            <SidebarHeader />
            <Box flexGrow={1} sx={{ mt: 6 }}>
                <SidebarNavs />
            </Box>
            <SidebarFooter />
        </Stack >
    )
}
