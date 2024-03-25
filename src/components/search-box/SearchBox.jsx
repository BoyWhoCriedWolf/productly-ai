import { Search } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'

export default function SearchBox() {
    return (
        <Box sx={{
            py: 2,
            px: 5,
            borderRadius: 28,
            border: theme => `solid ${theme.palette.text.disabled} 2px`,
            position: 'relative'
        }}>
            <IconButton sx={{ position: "absolute", top: '50%', transform: "translate(0, -50%)", right: 0 }} size='small'>
                <Search />
            </IconButton>
            <input style={{ border: 'none', background: 'transparent' }} />
        </Box>
    )
}
