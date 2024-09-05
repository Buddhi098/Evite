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
import logo from "../images/Logo/logo_light.png";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()

  const home = () => {
    navigate("/")
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box
                component="img"
                sx={{ width: "100px", marginLeft: "60px" }}
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
                      style: {
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        color: "black",
                      },
                    }}
                    onClick={home}
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
                gap: "16px",
                position: "relative",
                right: "160px",
              }}
            >
              <Link to="/login">
                <Button variant="outlined">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained">SignUp</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Topbar;
