import { Stack } from '@mui/material'
import React from 'react'
import DataTable from './DataTable'
import DashboardHeader from './DashboardHeader'
import bg from "../images/background/event_bg_1.png"

const index = () => {
  return (
    <Stack sx={{backgroundImage: `url(${bg})` , minHeight:"100vh"}}>
      <DashboardHeader/>
      <DataTable/>
    </Stack>
  )
}

export default index
