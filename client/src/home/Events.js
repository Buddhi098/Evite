import { Box, Pagination, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { theme } from "../Theme";
import Groups2Icon from "@mui/icons-material/Groups2";
import Event from "./Event";
import ev1 from "../images/event/ev1.jpg";
import ev2 from "../images/event/ev2.jpg";
import ev3 from "../images/event/ev3.jpg";
import ev4 from "../images/event/ev4.jpeg";
import ev5 from "../images/event/ev5.jpg";

const Events = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "block",
            padding: "10px 100px",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              display: "block",
            }}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Groups2Icon
                sx={{
                  fontSize: "40px",
                  marginRight: "10px",
                  color: "brown.500",
                }}
              />
              <Typography variant="h3_title">UpComming Events</Typography>
            </Box>
            <Typography variant="body1_grey">
              Explore the latest events on Evite. From concerts to conferences,
              find what's happening near you with ease.
            </Typography>
          </Box>
          {/* events */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              marginTop: "24px",
            }}
          >
            <Event image={ev1} />
            <Event image={ev2} />
            <Event image={ev3} />
            <Event image={ev4} />
            <Event image={ev5} />
            <Event image={ev2} />
            <Event image={ev4} />
            <Event image={ev3} />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "16px",
            }}
          >
            <Pagination count={10} color="primary" />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Events;
