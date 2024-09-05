import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  Pagination,
  ButtonBase,
} from "@mui/material";
import SearchBox from "./SearchBox";
import Event from "../home/Event";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";

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

const Section1 = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/public/user/events");
        console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    fetchEvents();
  }, []);

  console.log("store", events);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.name);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(value);
  };

  const filteredEvents = events.filter(
    (event) =>
      (selectedCategory === "" || event.category === selectedCategory) &&
      event.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log("idis", displayedEvents);

  const navigate = useNavigate();

  const handleNavigate = (id) => () => {
    console.log("adsd" , id)
    navigate(`/event/${id}`);
    window.scrollTo(0,0)
  };

  return (
    <Stack
      direction={"column"}
      p={2}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Stack
        direction={"column"}
        p={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="body1" gutterBottom>
          All Events
        </Typography>
        <Typography variant="body2_grey" color={"#999999"} gutterBottom>
          Explore our complete list of Events and find your favorites
        </Typography>
      </Stack>

      <Stack width={"100%"}>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Stack>

      <Stack direction="row" spacing={2} width={"90%"} minHeight={"80vh"}>
        <Box width={"30%"}>
          <Typography variant="body1">Categories</Typography>
          <Stack spacing={0.1}>
            {categories.map((category) => (
              <FormControlLabel
                key={category}
                control={
                  <Checkbox
                    checked={selectedCategory === category}
                    onChange={handleCategoryChange}
                    name={category}
                  />
                }
                label={
                  <Typography variant="body2_grey" color={"black.800"}>
                    {category}
                  </Typography>
                }
              />
            ))}
          </Stack>
        </Box>
        <Grid container spacing={2} width={"100%"}>
          {displayedEvents.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ButtonBase onClick={handleNavigate(event.id)}>
                <Event
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  imageUrls={event.imageUrls}
                  
                />
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Pagination
        count={Math.ceil(filteredEvents.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ marginTop: 3 }}
      />
    </Stack>
  );
};

export default Section1;
