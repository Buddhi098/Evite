import React from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const Title = ({title , date}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{padding:'2px 30px'}}>
        <Box>
          <Typography
            variant="h3_title"
            sx={{ fontWeight: "900", fontSize: "40px" }}
          >
           {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1_grey">{date}</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Title;
