import React from "react";
import { ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider from Material-UI
import { theme } from "../Theme";
import { Avatar, AvatarGroup, Box, Divider, Typography } from "@mui/material";
import pr1 from "../images/profile/pr1.jpg";
import pr2 from "../images/profile/pr2.jpg";
import pr3 from "../images/profile/pr3.jpg";
import pr4 from "../images/profile/pr4.jpg";

const Event = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "250px",
            padding: "16px",
            borderRadius: "16px",
            cursor: "pointer",
            margiTop: "16px",
            "&:hover": {
              background: "#f0f0f0",
            },
          }}
        >
          <Box>
            <Box
              component="img"
              src={props.image}
              sx={{ width: "100%",height:'150px', borderRadius: "10px" }}
            ></Box>
          </Box>

          <Box sx={{ display: "flex", fontSize: "10px", color: "primary.400" }}>
            <Typography variant="body2">WED.MAR 15</Typography>
            <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
            <Typography variant="body2">7.30 PM BST</Typography>
          </Box>

          <Box sx={{ marginTop: "8px" }}>
            <Typography variant="h4_title">
              Career Meetup With Design & Development
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <AvatarGroup
                total={10}
                sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } , fontSize:"10px"}}
              >
                <Avatar alt="Remy Sharp" src={pr1} />
                <Avatar alt="Travis Howard" src={pr2} />
                <Avatar alt="Agnes Walker" src={pr3} />
                <Avatar alt="Trevor Henderson" src={pr4} />
              </AvatarGroup>
            </Box>
            <Box>
              <Typography variant="body2" sx={{color:'text_grey'}}>+20 More</Typography>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Event;
