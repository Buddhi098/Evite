import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../Theme";
import logo from "../images/Logo/logo_light_2.png";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const DashboardHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box mt={4}>
              <Box
                component="img"
                sx={{ width: "60px", marginLeft: "60px" }}
                src={logo}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <List
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "50px",
                  cursor: "pointer",
                }}
              >
                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                    "&:hover": {
                      color: "primary.600",
                    },
                  }}
                  onMouseEnter={() => {
                    setIsHovered("home");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  <ListItemText
                    primary="Home"
                    primaryTypographyProps={{
                      style: { fontFamily: "Poppins", fontWeight: "500" },
                    }}
                  />
                  {isHovered === "home" ? (
                    <Box
                      sx={{
                        width: "15px",
                        border: "1.3px solid black",
                        marginLeft: "auto",
                        marginTop: "-5px",
                        borderColor: "primary.main",
                      }}
                    ></Box>
                  ) : null}
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                    "&:hover": {
                      color: "primary.600",
                    },
                  }}
                  onMouseEnter={() => {
                    setIsHovered("events");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  <ListItemText
                    primary="Events"
                    primaryTypographyProps={{
                      style: { fontFamily: "Poppins", fontWeight: "500" },
                    }}
                  />
                  {isHovered === "events" ? (
                    <Box
                      sx={{
                        width: "15px",
                        border: "1.3px solid black",
                        marginLeft: "auto",
                        marginTop: "-5px",
                        borderColor: "primary.main",
                      }}
                    ></Box>
                  ) : null}
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                    "&:hover": {
                      color: "primary.600",
                    },
                  }}
                  onMouseEnter={() => {
                    setIsHovered("about");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  <ListItemText
                    primary="About"
                    primaryTypographyProps={{
                      style: { fontFamily: "Poppins", fontWeight: "500" },
                    }}
                  />
                  {isHovered === "about" ? (
                    <Box
                      sx={{
                        width: "15px",
                        border: "1.3px solid black",
                        marginLeft: "auto",
                        marginTop: "-5px",
                        borderColor: "primary.main",
                      }}
                    ></Box>
                  ) : null}
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                    "&:hover": {
                      color: "primary.600",
                    },
                  }}
                  onMouseEnter={() => {
                    setIsHovered("contact");
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  <ListItemText
                    primary="Contact"
                    primaryTypographyProps={{
                      style: { fontFamily: "Poppins", fontWeight: "500" },
                    }}
                  />
                  {isHovered === "contact" ? (
                    <Box
                      sx={{
                        width: "15px",
                        border: "1.3px solid black",
                        marginLeft: "auto",
                        marginTop: "-5px",
                        borderColor: "primary.main",
                      }}
                    ></Box>
                  ) : null}
                </ListItem>
              </List>
            </Box>

            {/* signUp and Login Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap:'16px',
                position: "relative",
                right: "160px",
              }}

            >
              <ProfileMenu/>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default DashboardHeader;
