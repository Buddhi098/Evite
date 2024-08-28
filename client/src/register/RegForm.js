import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  Stack,
  ThemeProvider,
  LinearProgress,
} from "@mui/material";
import { useFormik } from "formik";
import bg from "../images/background/event_bg_2.png";
import * as Yup from "yup";
import logo from "../images/Logo/logo_light_2.png";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { theme } from "../Theme";
import Topbar from "../home/Topbar";
import api from "../api/api";

function getSteps() {
  return [
    "Basic Information",
    "Company Details",
    "Verification Documents",
    "Payment Information",
  ];
}

function BasicInformationForm({ formik }) {
  return (
    <Box>
      <TextField
        fullWidth
        size="small"
        id="fullName"
        name="fullName"
        label="Full Name"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
        helperText={formik.touched.fullName && formik.errors.fullName}
      />
      <TextField
        fullWidth
        size="small"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        size="small"
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />
      <Box display="flex" justifyContent="space-between">
        <TextField
          fullWidth
          size="small"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          margin="normal"
          variant="outlined"
          sx={{ mr: 1 }}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          size="small"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          margin="normal"
          variant="outlined"
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
      </Box>
    </Box>
  );
}

function CompanyDetailsForm({ formik }) {
  return (
    <Box>
      <TextField
        fullWidth
        size="small"
        id="companyName"
        name="companyName"
        label="Company Name"
        value={formik.values.companyName}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={formik.touched.companyName && Boolean(formik.errors.companyName)}
        helperText={formik.touched.companyName && formik.errors.companyName}
      />
      <TextField
        fullWidth
        size="small"
        id="website"
        name="website"
        label="Website URL"
        value={formik.values.website}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={formik.touched.website && Boolean(formik.errors.website)}
        helperText={formik.touched.website && formik.errors.website}
      />
      <TextField
        fullWidth
        size="small"
        id="businessAddress"
        name="businessAddress"
        label="Business Address"
        value={formik.values.businessAddress}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={
          formik.touched.businessAddress &&
          Boolean(formik.errors.businessAddress)
        }
        helperText={
          formik.touched.businessAddress && formik.errors.businessAddress
        }
      />
      <TextField
        fullWidth
        size="small"
        id="registrationNumber"
        name="registrationNumber"
        label="Registration Number"
        value={formik.values.registrationNumber}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={
          formik.touched.registrationNumber &&
          Boolean(formik.errors.registrationNumber)
        }
        helperText={
          formik.touched.registrationNumber && formik.errors.registrationNumber
        }
      />
    </Box>
  );
}

function VerificationDocumentsForm({ formik }) {
  const [fileName, setFileName] = useState("");

  return (
    <Box>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            size="small"
            id="businessRegistrationDate"
            name="businessRegistrationDate"
            label="Business Registration Date"
            type="date"
            value={formik.values.businessRegistrationDate}
            onChange={formik.handleChange}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            error={
              formik.touched.businessRegistrationDate &&
              Boolean(formik.errors.businessRegistrationDate)
            }
            helperText={
              formik.touched.businessRegistrationDate &&
              formik.errors.businessRegistrationDate
            }
          />
          <TextField
            fullWidth
            size="small"
            id="businessTextData"
            name="businessTextData"
            label="Additional Business Information"
            value={formik.values.businessTextData}
            onChange={formik.handleChange}
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            error={
              formik.touched.businessTextData &&
              Boolean(formik.errors.businessTextData)
            }
            helperText={
              formik.touched.businessTextData && formik.errors.businessTextData
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            border: "1px solid #f0f0f0",
            ml: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction={"column"}
        >
          <Button
            variant="outlined"
            component="label"
            startIcon={<UploadFileIcon />}
            sx={{
              marginTop: 2,
              padding: 1,
              borderColor: "#1976d2",
              color: "#1976d2",
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                borderColor: "#115293",
                backgroundColor: "#e3f2fd",
              },
            }}
          >
            Upload Business License
            <input
              type="file"
              hidden
              onChange={(event) => {
                const file = event.currentTarget.files[0];
                formik.setFieldValue("businessLicense", file);
                setFileName(file ? file.name : "");
              }}
            />
          </Button>
          {fileName && (
            <Typography variant="body2" sx={{ marginTop: 1, color: "#555" }}>
              {fileName}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

function PaymentInformationForm({ formik }) {
  return (
    <Box>
      <TextField
        fullWidth
        size="small"
        id="paypalAccountName"
        name="paypalAccountName"
        label="PayPal Account Name (Optional)"
        value={formik.values.paypalAccountName}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={
          formik.touched.paypalAccountName &&
          Boolean(formik.errors.paypalAccountName)
        }
        helperText={
          formik.touched.paypalAccountName && formik.errors.paypalAccountName
        }
      />
      <TextField
        fullWidth
        size="small"
        id="paypalEmail"
        name="paypalEmail"
        label="PayPal Email"
        value={formik.values.paypalEmail}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        error={formik.touched.paypalEmail && Boolean(formik.errors.paypalEmail)}
        helperText={formik.touched.paypalEmail && formik.errors.paypalEmail}
      />
      <TextField
        fullWidth
        size="small"
        id="billingAddress"
        name="billingAddress"
        label="Billing Address"
        value={formik.values.billingAddress}
        onChange={formik.handleChange}
        margin="normal"
        variant="outlined"
        multiline
        rows={3}
        error={
          formik.touched.billingAddress && Boolean(formik.errors.billingAddress)
        }
        helperText={
          formik.touched.billingAddress && formik.errors.billingAddress
        }
      />
    </Box>
  );
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\d+$/, "Phone Number must be a valid number"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  companyName: Yup.string().required("Company Name is required"),
  website: Yup.string(),
  businessAddress: Yup.string().required("Business Address is required"),
  registrationNumber: Yup.string().required("Registration Number is required"),
  businessRegistrationDate: Yup.date().required(
    "Business Registration Date is required"
  ),
  businessTextData: Yup.string().required(
    "Additional Business Information is required"
  ),
  paypalEmail: Yup.string()
    .email("Invalid PayPal email address")
    .required("PayPal Email is required"),
  billingAddress: Yup.string().required("Billing Address is required"),
  paypalAccountName: Yup.string(),
});

function RegForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const steps = getSteps();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      website: "",
      businessAddress: "",
      registrationNumber: "",
      businessRegistrationDate: "",
      businessTextData: "",
      businessLicense: null,
      paypalEmail: "",
      billingAddress: "",
      paypalAccountName: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form Values:", values);

      const formData = new FormData();

      Object.keys(values).forEach((key) => {
        if (key === "businessLicense" && values[key] === null) {
          // Handle file input separately if it's null
          console.log('skip file')
        } else if (values[key] !== null && values[key] !== undefined) {
          formData.append(key, values[key]);
        }
      });

      console.log(formData);
      setLoading(true);
      try {
        const response = await api.post("/public/user/register", formData);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleNext = async () => {
    const errors = await formik.validateForm();

    switch (activeStep) {
      case 0:
        if (
          !errors["fullName"] &&
          !errors["email"] &&
          !errors["phoneNumber"] &&
          !errors["password"] &&
          !errors["confirmPassword"]
        ) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          formik.setTouched({
            fullName: true,
            email: true,
            phoneNumber: true,
            password: true,
            confirmPassword: true,
          });
        }
        return;
      case 1:
        if (
          !errors["companyName"] &&
          !errors["website"] &&
          !errors["businessAddress"] &&
          !errors["registrationNumber"]
        ) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          formik.setTouched({
            companyName: true,
            website: true,
            businessAddress: true,
            registrationNumber: true,
          });
        }
        return;
      case 2:
        if (
          !errors["businessRegistrationDate"] &&
          !errors["businessTextData"]
        ) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          formik.setTouched({
            businessRegistrationDate: true,
            businessTextData: true,
          });
        }
        return;
      case 3:
        if (!errors["paypalEmail"] && !errors["billingAddress"]) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          formik.handleSubmit();
        } else {
          formik.setTouched({ paypalEmail: true, billingAddress: true });
        }
        return;
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    formik.handleSubmit();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <BasicInformationForm formik={formik} />;
      case 1:
        return <CompanyDetailsForm formik={formik} />;
      case 2:
        return <VerificationDocumentsForm formik={formik} />;
      case 3:
        return <PaymentInformationForm formik={formik} />;
      default:
        return "Unknown step";
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Topbar />
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "rgb(162,152,255)",
          background:
            "linear-gradient(270deg, rgba(162,152,255,1) 0%, rgba(237,140,251,1) 100%)",
          objectFit: "cover",
        }}
      >
        <Box
          sx={{
            width: "60%",
            height: "70vh",
            backgroundColor: "white",
            p: "40px 5px",
            position: "relative",
            borderRadius: "10px",
            width: "70%",
            paddingTop: "0",
          }}
        >
          <Box sx={{ marginBottom: "30px", width: "100%" }}>
            {loading && <LinearProgress sx={{ width: "100%" }} />}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "50px",
                height: "50px",
                marginRight: "30px",
                marginBottom: "20px",
              }}
              src={logo}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "24px",
                gap: "4px",
              }}
            >
              <Typography
                variant="h3_title"
                align="center"
                color="primary.main"
              >
                Registration Form
              </Typography>
              <Typography variant="body2_grey" align="center">
                Register now to unlock all the benefits of Evite.
              </Typography>
            </Box>
          </Box>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 1, mb: 2, p: 4, width: "80%", margin: "0px auto" }}>
            {activeStep === steps.length ? (
              <Typography variant="h6" align="center">
                your registration is completed!
              </Typography>
            ) : (
              <>{getStepContent(activeStep)}</>
            )}
          </Box>
          <Box
            sx={{
              mt: 2,
              position: "absolute",
              bottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              width: "85%",
              alignItems: "center",
              ml: 10,
            }}
          >
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={
                activeStep === steps.length - 1 ? handleSubmit : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default RegForm;
