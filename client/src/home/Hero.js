import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import { getByDisplayValue } from "@testing-library/react";
import { theme } from "../Theme";
import React from "react";
import hero_img_2 from "../images/home/hero_img_2.png";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 100px",
            height: "81vh",
          }}
        >
          <Box sx={{ width: "40%" }}>
            <Box>
              <Typography variant="h2_title">
                A Smart way to Reach right Events With{" "}
                <Typography
                  component="span"
                  variant="h2_title"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  EVITE
                </Typography>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ marginTop: "20px", color: "text_grey" }}
              >
                Whatever you're looking to do this year, Evite can help. For 20
                years, people have relied on Evite to meet new people, discover
                events, and create memorable experiences. Join millions who
                connect and engage with our platform.
              </Typography>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
              <Link to="/dashboard">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginRight: "20px",
                    fontSize: "12px",
                    padding: "10px 26px",
                    fontWeight: "500",
                    borderRadius: "30px",
                  }}
                >
                  <EditCalendarIcon
                    sx={{
                      marginRight: "5px",
                      fontSize: "16px",
                      marginBottom: "2px",
                    }}
                  />
                  Create an Event
                </Button>
              </Link>
              <Link to="/events">
                <Button
                  variant="outlined"
                  sx={{
                    marginRight: "20px",
                    fontSize: "12px",
                    padding: "10px 26px",
                    fontWeight: "500",
                    borderRadius: "30px",
                  }}
                >
                  <ContentPasteSearchIcon
                    sx={{
                      marginRight: "5px",
                      fontSize: "16px",
                      marginBottom: "2px",
                    }}
                  />
                  FInd an Event
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ width: "60%" }}>
            <Box component="img" sx={{ width: "100%" }} src={hero_img_2}></Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Hero;
