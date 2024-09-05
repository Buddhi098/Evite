import { Box, Button, Paper, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { theme } from "../Theme";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import fe1 from "../images/home/fe1.png";
import fe2 from "../images/home/fe2.png";
import fe3 from "../images/home/fe3.png";

const Features = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "block",
            padding: "10px 100px",
            height: "80vh",
            background: "#f8f8f8",
            width: "70%",
            margin: "auto",
            marginTop: "50px",
            marginBottom: "50px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "30px",
            }}
          >
            <Box>
              <Typography variant="h3_title">
                <AutoAwesomeIcon /> Features Of EVITE
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1_grey">
                Evite offers a suite of powerful features for effortless event
                organization and promotion. From seamless event creation to
                intuitive management tools, discover everything you need in one
                platform.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "250px 250px 250px",
              margin: "16px 8px",
              gap: "90px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "white",
                height: "250px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px",
                gap: "10px",
              }}
            >
              <Box
                component="img"
                sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src={fe1}
              ></Box>
              <Box>
                <Typography variant="h4_title">Can Join Groups</Typography>
              </Box>
              <Box>
                <Typography variant="body2_grey">
                  Join groups on Evite to connect with like-minded individuals,
                  share interests, and participate in exciting events together.
                </Typography>
              </Box>
            </Paper>

            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "white",
                height: "250px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px",
                gap: "10px",
              }}
            >
              <Box
                component="img"
                sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src={fe2}
              ></Box>
              <Box>
                <Typography variant="h4_title">Ultimated Events</Typography>
              </Box>
              <Box>
                <Typography variant="body2_grey">
                  Discover the ultimate events with Evite. Explore top-rated,
                  highly anticipated events and make unforgettable memories.
                </Typography>
              </Box>
            </Paper>

            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "white",
                height: "250px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px",
                gap: "10px",
              }}
            >
              <Box
                component="img"
                sx={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src={fe3}
              ></Box>
              <Box>
                <Typography variant="h4_title">Start For Free</Typography>
              </Box>
              <Box>
                <Typography variant="body2_grey">
                  Get started for free with Evite. Create and promote your
                  events without any cost and reach a wider audience
                  effortlessly.
                </Typography>
              </Box>
            </Paper>
          </Box>

          <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center', marginTop:'90px'}}>
            <Button
              variant="contained"
              sx={{
                marginRight: "20px",
                fontSize: "12px",
                padding: "10px 26px",
                fontWeight: "500",
                borderRadius: "10px",
                width: "250px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Features;
