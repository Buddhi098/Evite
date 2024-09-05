import React from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const Title = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{padding:'2px 30px'}}>
        <Box>
          <Typography
            variant="h3_title"
            sx={{ fontWeight: "900", fontSize: "40px" }}
          >
            Tech Innovators Summit 2024
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1_grey">12th - 14th March 2024</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Title;
