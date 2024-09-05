import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Box,
  InputAdornment,
  MenuItem,
  Button,
  IconButton,
  Avatar,
  Tooltip
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CategoryIcon from "@mui/icons-material/Category";
import { useFormik } from "formik";
import * as Yup from "yup";
import DialogBox from "./DialogBox";
import api from "../api/api";
import SidePopup from "./SidePopup";

// Validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string().required("Event title is required"),
  date: Yup.date().required("Date is required").nullable(),
  time: Yup.string().required("Time is required"),
  location: Yup.string().required("Location is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  images: Yup.array()
    .of(Yup.mixed().required("An image is required"))
    .min(1, "At least one image is required")
    .max(3, "You can upload up to 3 images")
});

// Categories list
const categories = [
  "Conference",
  "Workshop",
  "Seminar",
  "Meetup",
  "Concert",
  "Festival",
  "Webinar",
  "Exhibition",
  "Charity",
  "Networking",
];

const CreateEventForm = () => {
  const btnRef = React.useRef(null);
  const [status, setStatus] = React.useState(null);
  const [btnStatus, setBtnStatus] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  const [previews, setPreviews] = React.useState([]);

  // Formik hook
  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      category: "",
      images: [],
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission
      console.log("Form values:", values);
      values['userId'] = localStorage.getItem("id");
      const formData = new FormData();
      
      // Append form values to formData
      Object.keys(values).forEach((key) => {
        if (key === "images") {
          values[key].forEach(file => formData.append("images", file));
        } else {
          formData.append(key, values[key]);
        }
      });

      btnRef.current.disabled = true;
      setBtnStatus(true);
      try {
        const response = await api.post("/auth/event/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setStatus("success");
        window.scrollTo(0, 0);
        console.log("Event created successfully:", response.data);
      } catch (error) {
        console.log("Error creating event:", error.response.data);
        setStatus("fail");
      }
    },
  });

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    formik.setFieldValue("images", [...files, ...newFiles]);

    // Generate previews
    const newPreviews = newFiles.map(file => URL.createObjectURL(file));
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
    formik.setFieldValue("images", updatedFiles);
  };

  return (
    <Container
      sx={{
        paddingY: 4,
        backgroundPosition: "center",
        minWidth: "100%",
      }}
    >
      <Paper
        sx={{
          padding: 4,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          width: "60%",
          margin: "10px auto",
        }}
      >
        <SidePopup status={status} />

        <Box mb={3}>
          <Typography variant="h4" color="black" fontSize="26px">
            Create New Event
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Fill out the form below to create a new event. Ensure all details
            are correct before submitting.
          </Typography>
        </Box>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                fullWidth
                name="title"
                label="Event Title"
                variant="outlined"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddCircleIcon />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("title")}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                fullWidth
                name="date"
                label="Date"
                type="date"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("date")}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                fullWidth
                name="time"
                label="Time"
                type="time"
                variant="outlined"
                required
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeIcon />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("time")}
                error={formik.touched.time && Boolean(formik.errors.time)}
                helperText={formik.touched.time && formik.errors.time}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size="small"
                fullWidth
                name="location"
                label="Location"
                variant="outlined"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("location")}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                fullWidth
                name="description"
                label="Description"
                variant="outlined"
                required
                multiline
                rows={4}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <DescriptionIcon />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("description")}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                size="small"
                fullWidth
                name="category"
                label="Event Category"
                variant="outlined"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CategoryIcon />
                    </InputAdornment>
                  ),
                }}
                {...formik.getFieldProps("category")}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button
                  variant="outlined"
                  component="span"
                  size="small"
                >
                  Upload Event Images
                </Button>
              </label>
              {formik.touched.images && formik.errors.images ? (
                <Typography color="error">{formik.errors.images}</Typography>
              ) : null}
              <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
                {previews.map((preview, index) => (
                  <Box key={index} position="relative" width={100} height={100}>
                    <Avatar
                      src={preview}
                      variant="square"
                      sx={{ width: "100%", height: "100%" }}
                    />
                    <Tooltip title="Remove image">
                      <IconButton
                        onClick={() => handleRemoveFile(index)}
                        size="small"
                        color="error"
                        sx={{ position: "absolute", top: 0, right: 0 }}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <DialogBox formik={formik} btnRef={btnRef} btnStatus={btnStatus} />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateEventForm;
