import React from "react";
import Title from "./Title";
import { Box, Paper, Stack } from "@mui/material";
import ImageSlider from "./Image";
import TicketBooking from "./TicketBooking";
import bg from "../images/background/event_bg.png";
import EventDetails from "./EventDetails";
import Footer from "../home/Footer";
import Topbar from "../home/Topbar";

const index = () => {
  return (
    <Stack>
       <Topbar/>
      <Box
        sx={{
          background: "#f8f8f8",
          backgroundImage: `url(${bg})`,
          display: "flex",
          justifyContent: "center",
          padding: "30px 20px",
          minHeight: "100vh",
        }}
      >
        <Paper
          sx={{
            width: "80%",
            padding: "20px",
            background: "#f8f8f8",
            borderRadius: "20px",
          }}
        >
          <Title />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ImageSlider />
            <TicketBooking />
          </Box>
          <Box>
            <EventDetails />
          </Box>
        </Paper>
      </Box>
      <Footer />
    </Stack>
  );
};

export default index;
