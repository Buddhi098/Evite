import React, { useState } from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.name) {
      errors.name = "Name is required";
    }
    if (!formValues.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formValues.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formValues.message) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      alert("Form submitted successfully");
      // You can handle form submission here, like sending data to a server
      console.log(formValues);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            padding: "20px",
            width: "82%",
            height: "68vh",
            background: "#f8f8f8",
            margin: "auto",
            borderRadius: "10px",
            marginTop: "50px",
            marginBottom: "50px",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="h3_title">Contact US</Typography>
          </Box>
          <Box>
            <Typography variant="body1_grey">
              Any Question or remark? Just write us a Message
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItem: "center",
                textAlign: "center",
                padding: "30px",
                width: "20%",
                height: "80%",
                backgroundColor: "primary.900",
                marginTop: "20px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  gap: "10px",
                }}
              >
                <Typography variant="h4_title" color="white">
                  Contact Information
                </Typography>
                <Typography
                  variant="body2_grey"
                  color="secondary.400"
                  sx={{ fontSize: "12px", marginTop: "14px" }}
                >
                  Fill Up the form and Our team will get back to you within 24
                  hours
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  paddingLeft: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                    color: "white",
                    width: "100%",
                  }}
                >
                  <LocalPhoneOutlinedIcon
                    sx={{ color: "secondary.400", fontSize: "18px" }}
                  />
                  <Typography variant="body2" sx={{ marginLeft: "10px" }}>
                    {" "}
                    076-8765345
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                    color: "white",
                    width: "100%",
                  }}
                >
                  <EmailOutlinedIcon
                    sx={{ color: "secondary.400", fontSize: "18px" }}
                  />
                  <Typography variant="body2" sx={{ marginLeft: "10px" }}>
                    {" "}
                    contact@evite.com
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                  textAlign: "center",
                  gap: "10px",
                  color: "secondary.400",
                }}
              >
                <FacebookIcon sx={{ cursor: "pointer" }} />
                <InstagramIcon sx={{ cursor: "pointer" }} />
                <XIcon sx={{ cursor: "pointer" }} />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                padding: "30px",
                width: "40%",
                height: "80%",
                backgroundColor: "white",
                marginTop: "20px",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <TextField
                label="Name"
                type="text"
                variant="standard"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                sx={{ width: "80%", marginBottom: "16px" }}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />
              <TextField
                label="Phone"
                type="tel"
                variant="standard"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                sx={{ width: "80%", marginBottom: "16px" }}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
              />
              <TextField
                label="Email"
                type="email"
                variant="standard"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                sx={{ width: "80%", marginBottom: "16px" }}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField
                label="Message"
                multiline
                rows={3}
                variant="standard"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                sx={{ width: "80%", marginBottom: "16px" }}
                error={!!formErrors.message}
                helperText={formErrors.message}
              />
              <Button
                variant="contained"
                sx={{ margin: "27px auto", width: "30%" }}
                onClick={handleSubmit}
                disabled={isSubmitted}
              >
                Submit
              </Button>
              {isSubmitted && (
                <Typography variant="body2" color="success.main">
                  Form submitted successfully!
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default ContactUs;
