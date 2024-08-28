import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "0px",
        marginBottom: "40px",
      }}
    >
      <Stack
        sx={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        direction="row"
      >
        <TextField
          label={<Typography variant="body2_nunito">Search</Typography>}
          variant="filled"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            borderRadius: "0",
            width: "70%",
            "& .MuiFilledInput-root": {
              borderBottom: "none",
              borderRadius: "0",
            },
            "& .MuiFilledInput-root::before": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root::after": {
              borderBottom: "none",
            },
            "& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default SearchBox;
