import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Modal
} from "@mui/material";
import React from "react";

export default function NewModal({ open, handleClose }) {

  return (

    <Modal open={open} onClose={handleClose}>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 420, md: 500 },
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 24,
          p: 4
        }}
      >

        <Typography variant="h6" mb={3}>
          Create New Order
        </Typography>

        <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Customer Name"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              size="small"
            />
          </Grid>

        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 3
          }}
        >

          <Button
            variant="outlined"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{ bgcolor: "#504099" }}
          >
            Save Order
          </Button>

        </Box>

      </Box>

    </Modal>
  );
}