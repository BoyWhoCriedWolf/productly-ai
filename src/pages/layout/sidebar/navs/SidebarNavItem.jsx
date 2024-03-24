import { Box } from '@mui/material'
import React from 'react'

export default function SidebarNavItem({ isActive = false, label = "Nav Item Label" }) {
    return (
        <Box sx={{
            px: 2.5,
            py: 2,
            cursor: 'pointer',
            borderRadius: theme => theme.shape.borderRadius,
            display: 'flex',
            alignItems: 'center',

            ...(isActive ? {
                background: theme => theme.palette.primary.main,
                color: theme => theme.palette.primary.contrastText
            } : {})
        }}>{label}</Box>
    )
}
