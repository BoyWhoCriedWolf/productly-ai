import React from 'react'
import Logo from '../../../../components/logo'
import { Box } from '@mui/material'

export default function SidebarHeader() {
  return (
    <Box display="flex" justifyContent="center" sx={{mt: 5}}>
      <Logo />
    </Box>
  )
}
