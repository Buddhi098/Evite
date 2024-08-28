import React from "react";
import { ThemeProvider } from "@emotion/react";
import work7 from "../images/login/Work_7.jpg";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../Theme";
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../home/Topbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import ErrorIcon from "@mui/icons-material/Error";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { login } = useAuth();
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      const user = {
        email: values.email,
        password: values.password,
      };
      console.log(user);
      const isLogin = login({ user , setError});
    
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(162,152,255)",
          background:
            "linear-gradient(270deg, rgba(162,152,255,1) 0%, rgba(237,140,251,1) 100%)",
          height: "100vh",
          width: "100%",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
            height: "78vh",
            backgroundColor: "white",
            margin: "auto",
            marginTop: "10vh",
            padding: "10px 30px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "40%",
              alignItems: "center",
              height: "70%",
              justifyContent: "center",
            }}
          >
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h3_title">Login</Typography>
              <Typography>
                Doesn't have an account yet? <Link to="/signup">Sign Up</Link>
              </Typography>
            </Box>
            {error && (
              <Stack
                direction={"row"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#ffc9be",
                  padding: "10px 60px",
                }}
              >
                <ErrorIcon color="error" sx={{ marginRight: "10px" }} />
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              </Stack>
            )}
            <form onSubmit={formik.handleSubmit} style={{ width: "85%" }}>
              <Box sx={{ marginBottom: 2 }}>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <TextField
                  label="you@example.com"
                  id="email"
                  name="email"
                  size="small"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  label="Password"
                  id="password"
                  name="password"
                  size="small"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="rememberMe"
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                    />
                  }
                  label="Remember me"
                />
              </Box>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                type="submit"
              >
                Login
              </Button>
            </form>
          </Box>
          <Box
            sx={{
              width: "60%",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={work7}
              alt="Work Image"
            />
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
