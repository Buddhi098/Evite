import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../Theme";
import { Avatar, AvatarGroup, Box, Divider, Typography } from "@mui/material";

import pr1 from "../images/profile/pr1.jpg";
import pr2 from "../images/profile/pr2.jpg";
import pr3 from "../images/profile/pr3.jpg";
import pr4 from "../images/profile/pr4.jpg";

import notFound from "../images/not.jpg";

const Event = ({ title, date, time, location, description, imageUrls }) => {
  console.log(title)

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
            {imageUrls && imageUrls.length > 0 ? (
              <Box
                component="img"
                src={imageUrls[0]} // Show the first image from the array
                sx={{ width: "100%", height: "150px" , objectFit:"cover" }}
              />
            ) : (
              <Box
                component="img"
                src={notFound} // Show the first image from the array
                sx={{ width: "100%", height: "150px" }}
              />
            )}
          </Box>

          <Box sx={{ display: "flex", color: "primary.400" }}>
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              {date}
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
            <Typography variant="body2" sx={{ fontSize: "13px" }}>
              {time}
            </Typography>
          </Box>

          <Box sx={{display:"flex" ,alignItems:"flex-start" , flexDirection:"column" ,  marginTop: "8px"}}>
            <Typography variant="h4_title">{title}</Typography>
            <Typography variant="body2" color="textSecondary" sx={{fontSize:"12px"}}>{location}</Typography>
            {/* <Typography variant="body2" color="textSecondary">
              {description}
            </Typography> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AvatarGroup
              total={10}
              sx={{
                "& .MuiAvatar-root": { width: 20, height: 20 },
                fontSize: "10px",
              }}
            >
              <Avatar alt="Remy Sharp" src={pr1} />
                <Avatar alt="Travis Howard" src={pr2} />
                <Avatar alt="Agnes Walker" src={pr3} />
                <Avatar alt="Trevor Henderson" src={pr4} />
            </AvatarGroup>
            <Typography variant="body2" sx={{ color: "text_grey" }}>
              +20 More
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Event;
