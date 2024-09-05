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

const EventDetails = ({date , time , location , description}) => {

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Box sx={{ padding: 3, borderRadius: 2 }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          <EventIcon fontSize="small" /> {date}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          <AccessTimeIcon fontSize="small" /> {time}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          <LocationOnIcon fontSize="small" /> {location}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default EventDetails;
