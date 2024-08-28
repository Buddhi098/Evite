import { Stack } from "@mui/material";
import React from "react";
import CreateEventForm from "./CreateEventForm";
import DashboardHeader from "../dashboard/DashboardHeader";
import bg from "../images/background/event_bg_1.png"; // Make sure the path is correct

const index = () => {
  return (
    <Stack sx={{ backgroundImage: `url(${bg})` , maxHeight:"100vh" , objectFit: "cover", }}>
      <DashboardHeader />
      <CreateEventForm />
    </Stack>
  );
};

export default index;
