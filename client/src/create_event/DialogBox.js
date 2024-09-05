import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Warning, Close } from "@mui/icons-material";
import api from "../api/api";

const DialogBox = ({ formik, btnRef ,btnStatus}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    formik.handleSubmit();
    handleClose();
  };

  const handleNo = () => {
    // Handle "No" action here
    console.log("No clicked");
    handleClose();
  };

  return (
    <div>
      <Button
      disabled={btnStatus}
        ref={btnRef}
        onClick={handleClickOpen}
        variant="contained"
        size="large"
        sx={{
          padding: "12px 28px",
          backgroundColor: "#864af9",
          color: "#ffffff",
          textTransform: "uppercase",
          fontWeight: "bold",
          letterSpacing: "1px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#6e3dcc",
            transform: "translateY(-3px)",
            boxShadow: "0px 6px 10px rgba(134, 74, 249, 0.7)",
          },
          "&:active": {
            transform: "translateY(0)",
            boxShadow: "0px 2px 10px rgba(134, 74, 249, 0.5)",
          },
        }}
      >
        Submit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          <Warning color="warning" sx={{ mr: 1 }} />
          <Typography variant="h6">Warning</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed with this action?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNo} color="secondary" variant="outlined">
            No
          </Button>
          <Button onClick={handleYes} color="warning" variant="contained">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogBox;
