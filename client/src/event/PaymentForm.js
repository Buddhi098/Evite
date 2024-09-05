import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  Stack,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import bg from "../images/background/event_bg.png";
import { MinimizeTwoTone } from "@mui/icons-material";
import api from "../api/api";
import SidePopup from "../create_event/SidePopup";

const PaymentForm = () => {
  const { totalTicketPrice, ticketCount, eventId } = useParams();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(totalTicketPrice);
  }, [totalTicketPrice]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post("/public/user/create_order", {
        ...userData,
        ticketCount,
        totalPrice,
        eventId,
      })
      .then((response) => {
        var payment = {
          sandbox: true,
          merchant_id: "1227645", // Replace your Merchant ID
          return_url: "http://localhost:3000/home",
          cancel_url: "http://localhost:3000/home",
          notify_url: `http://localhost:9090/public/user/notify_order/${response.data.orderId}`,
          order_id: response.data.orderId,
          items: "Tickets Purchase",
          amount: response.data.amount,
          currency: "LKR",
          hash: response.data.hash,
          first_name: userData.name,
          last_name: "", // If you have last name, add it here
          email: userData.email,
          phone: userData.phone,
          address: "", // If you have this information, add it here
          city: "", // If you have this information, add it here
          country: "", // If you have this information, add it here
          delivery_address: "", // If you have this information, add it here
          delivery_city: "", // If you have this information, add it here
          delivery_country: "", // If you have this information, add it here
        };

        console.log(payment);

        window.payhere.startPayment(payment);
      });
  };

  const [isSuccess , setIsSSuccess] = useState(false);


  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    setIsSSuccess(true);
    // Note: validate the payment and show success or failure page to the customer

    setTimeout(()=>{
        window.location.href = "/"
    } , 5000)
  };

  // Payment window closed
  window.payhere.onDismissed = function onDismissed() {
    // Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Error occurred
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:" + error);
  };

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        objectFit: "cover",
      }}
    >
        {isSuccess && (<SidePopup status={"success"} message={"Payment Completed"}/>)}
        
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Complete Your Purchase
            </Typography>

            <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
              Please fill in your details to proceed with the payment.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                required
                name="name"
                label="Full Name"
                value={userData.name}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{ style: { fontWeight: "bold" } }}
                InputProps={{ style: { fontSize: "1.1rem" } }}
              />
              <TextField
                required
                name="email"
                label="Email Address"
                value={userData.email}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{ style: { fontWeight: "bold" } }}
                InputProps={{ style: { fontSize: "1.1rem" } }}
              />
              <TextField
                required
                name="phone"
                label="Phone Number"
                value={userData.phone}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
                InputLabelProps={{ style: { fontWeight: "bold" } }}
                InputProps={{ style: { fontSize: "1.1rem" } }}
              />
              <TextField
                required
                name="address"
                label="Billing Address"
                value={userData.address}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2, mb: 3 }}
                InputLabelProps={{ style: { fontWeight: "bold" } }}
                InputProps={{ style: { fontSize: "1.1rem" } }}
              />

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Total Price: ${totalPrice}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                  sx={{ px: 4, py: 1.5, borderRadius: "8px" }}
                >
                  Pay Now
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default PaymentForm;
