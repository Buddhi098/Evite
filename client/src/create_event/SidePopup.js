// PopUpMessages.js
import React, { useState, useEffect } from 'react';
import { Snackbar, Alert, Button } from '@mui/material';
import { CheckCircle as SuccessIcon, Error as ErrorIcon } from '@mui/icons-material';

function SidePopup({ status, message }) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState('success'); // 'success' or 'error'
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (status === 'success' || status === 'fail') {
      setSeverity(status === 'success' ? 'success' : 'error');
      setAlertMessage(message || (status === 'success' ? 'Operation completed successfully!' : 'Something went wrong.'));
      setOpen(true);
    }
  }, [status, message]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      action={
        <Button color="inherit" onClick={handleClose}>
          Close
        </Button>
      }
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning
      sx={{
        '& .MuiAlert-root': { borderRadius: 1 },
        position: 'absolute',
        top: 16,
        right: 16,
      }} // Custom styling for positioning
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        iconMapping={{
          success: <SuccessIcon fontSize="inherit" />,
          error: <ErrorIcon fontSize="inherit" />,
        }}
        sx={{ width: '100%' }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
}

export default SidePopup;
