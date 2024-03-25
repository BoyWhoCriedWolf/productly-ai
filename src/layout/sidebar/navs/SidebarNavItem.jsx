import { Box } from '@mui/material'
import React from 'react'
import defaultIconPath from "../../../assets/img/icons/feedback.svg"

export default function SidebarNavItem({ iconPath = defaultIconPath, isActive = false, label = "Nav Item Label" }) {
    return (
        <Box sx={{
            px: 2.5,
            py: 2,
            cursor: 'pointer',
            borderRadius: theme => theme.shape.borderRadius / 6,
            display: 'flex',
            alignItems: 'center',
            gap: 2,

            ...(isActive ? {
                background: theme => theme.palette.primary.main,
                color: theme => theme.palette.primary.contrastText
            } : {})
        }}>
            <img src={iconPath} alt={label} style={{}} />
            <span>{label}</span>
        </Box>
    )
}
