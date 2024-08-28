import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const EventDetails = () => {
  const event = {
    title: "Summer Music Festival",
    date: "August 30, 2024",
    time: "3:00 PM - 10:00 PM",
    location: "Central Park, New York, NY",
    description:
      "Get ready for an unforgettable experience at the Summer Music Festival! Set against the stunning backdrop of Central Park, this year's festival promises a full day of entertainment, culinary delights, and family-friendly activities. From 3:00 PM to 10:00 PM, immerse yourself in a diverse lineup of performances featuring renowned artists across multiple genres, including rock, jazz, and indie. Indulge in a variety of gourmet food trucks offering everything from artisanal burgers to exotic international cuisines. Enjoy interactive workshops, games, and art installations that cater to all ages. Whether you're a music lover, a food enthusiast, or simply looking for a fun day out, the Summer Music Festival offers something for everyone. Bring your friends and family for a day filled with joy, laughter, and unforgettable memories in the heart of New York City.",
  };

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Box sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          <EventIcon fontSize="small" /> {event.date}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          <AccessTimeIcon fontSize="small" /> {event.time}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          <LocationOnIcon fontSize="small" /> {event.location}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" paragraph>
          {event.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default EventDetails;
