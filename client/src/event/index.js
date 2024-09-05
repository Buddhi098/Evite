import React, { useEffect } from "react";
import Title from "./Title";
import { Box, Paper, Stack } from "@mui/material";
import ImageSlider from "./Image";
import TicketBooking from "./TicketBooking";
import bg from "../images/background/event_bg.png";
import EventDetails from "./EventDetails";
import Footer from "../home/Footer";
import Topbar from "../home/Topbar";
import { useParams } from "react-router-dom";
import api from "../api/api";

const Index = () => {
  const { id } = useParams();
  const [event, setEvent] = React.useState({});

  const fetchData = async () => {
    try {
      const response = await api.get(`/public/user/get_event_by_id/${id}`);
      setEvent(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching event", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Stack>
      <Topbar />
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
          <Title title={event.title} date={event.date}/>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <ImageSlider />
            <TicketBooking price={event.price}/>
          </Box>
          <Box>
            <EventDetails date={event.date} time={event.time} location={event.location} description={event.description}/>
          </Box>
        </Paper>
      </Box>
      <Footer />
    </Stack>
  );
};

export default Index;
