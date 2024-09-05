import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";

const FilterComponent = ({
  search,
  handleSearch,
  filter0,
  setFilter0,
  filter1,
  setFilter1,
  filter2,
  setFilter2,
  filter3,
  setFilter3,
  checked,
  setChecked,
}) => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");

  const filters = [filter0, filter1, filter2, filter3];
  const setFilters = [setFilter0, setFilter1, setFilter2, setFilter3];

  const handleFilterChange = (event, index) => {
    const { value } = event.target;
    setFilters[index](value);
  };

  return (
    <Box
      sx={{
        padding: 2,
        marginBottom: "8px",
        background: "white",
        borderRadius: "3px",
        boxShadow: "0px 0px 3px rgba(0 , 0 , 0 , 0.1)",
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#C0A888",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArticleIcon sx={{ color: "white" }} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant="h4" ml="2px" fontSize={"28px"}>
              Events
            </Typography>
            <Typography variant="h6" ml="2px" color="#8E8B8B" fontSize={"18px"}>
            You can view all the events you've added here.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <TextField
            size="small"
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}
      >
        <Link to="/event_form">
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              backgroundColor: "#864af9", // Custom color
              color: "white",
              padding: "10px 25px",
              fontSize: "14px",
              boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#6b3bc7", // Darker shade on hover
              },
            }}
          >
            Create Event
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default FilterComponent;
