import React from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import logo from "../images/Logo/logo_light_2.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "30vh",
            background: "#f8f8f8",
            padding:"20px 150px"
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flec",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                sx={{ widht: "50px", height: "50px"  , marginRight:'10px' }}
                src={logo}
              ></Box>
              <Box>
                <Typography variant="h3_title" sx={{fontWeight:'600'}}>EVITE</Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body2_grey">
                &copy; {new Date().getFullYear()} Your Website. All rights
                reserved.
              </Typography>
            </Box>
          </Box>

          <Box sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
            <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , gap:'10px'}}>
                <EmailOutlinedIcon/>
                <FacebookIcon/>
                <InstagramIcon/>
                <XIcon/>
            </Box>
            <Box sx={{display:'flex' , justifyContent:'center' , alignItems:'center' , gap:"10px" , marginTop:'16px'}}>
                <Typography variant="body2_grey">
                    About Us
                </Typography>
                <Typography variant="body2_grey">
                    FAQ
                </Typography>
                <Typography variant="body2_grey">
                    Contact
                </Typography>
                <Typography variant="body2_grey">
                    Blog
                </Typography>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Footer;
