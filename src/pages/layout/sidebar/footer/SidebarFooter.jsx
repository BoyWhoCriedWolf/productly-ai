import { Box } from '@mui/material'
import React from 'react'
import SidebarNavItem from '../navs/SidebarNavItem'

export default function SidebarFooter() {
    return (
        <Box sx={{ width: '100%' }}>
            <SidebarNavItem isActive label="Log out" />
        </Box>
    )
}
