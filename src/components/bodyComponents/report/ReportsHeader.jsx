import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function ReportsHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        Reports
      </Typography>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#504099",
          textTransform: "none"
        }}
      >
        Export Report
      </Button>
    </Box>
  );
}