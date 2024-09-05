import {
  Box,
  Button,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { theme } from "../Theme";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const TicketBooking = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const ticket = 100;
  const [ticketPrice, setTicketPrice] = useState(100);

  const addButton = useRef(null);
  const removeButton = useRef(null);

  function addTicket() {
    setTicketCount((prevCount) => {
      if (prevCount >= 100) {
        addButton.current.disabled = true;
        return prevCount;
      } else {
        removeButton.current.disabled = false;
        setTicketPrice((prevPrice) => ticket * (prevCount + 1));
        return prevCount + 1;
      }
    });
  }

  function removeTicket() {
    setTicketCount((prevCount) => {
      if (prevCount <= 1) {
        removeButton.current.disabled = true;
        return prevCount;
      } else {
        addButton.current.disabled = false;
        setTicketPrice((prevPrice) => ticket * (prevCount - 1));
        return prevCount - 1;
      }
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ width: "35%" ,padding:'16px 10px'}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            border: "2px solid black",
            borderColor: "primary.main",
            margin: "auto",
            padding: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-bet",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Box>
              <Typography variant="body1" fontWeight="600">
                General Admission
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconButton
                sx={{
                  padding: "4px",
                  background: "#f0f0f0",
                  borderRadius: "6px",
                }}
                onClick={addTicket}
                ref={addButton}
              >
                <AddIcon />
              </IconButton>
              <Box
                sx={{
                  width: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" fontWeight="700" fontSize="18px">
                  {" "}
                  {ticketCount}{" "}
                </Typography>
              </Box>
              <IconButton
                sx={{
                  padding: "4px",
                  background: "#f0f0f0",
                  borderRadius: "6px",
                }}
                ref={removeButton}
                onClick={removeTicket}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              marginRight: "auto",
              marginLeft: "12px",
              display: "flex",
              gap: "20px",
              marginTop: "6px",
            }}
          >
            <Typography variant="body1_grey" fontWeight="600">
              $ {ticketPrice}
            </Typography>
            <Box>
              <HelpOutlineIcon sx={{ color: "primary.main" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            margin: "auto",
            padding: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Button variant="contained" sx={{boxShadow:'none' , width:"106%" , padding:'10px '}}>Check out for ${ticketPrice}</Button>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default TicketBooking;
