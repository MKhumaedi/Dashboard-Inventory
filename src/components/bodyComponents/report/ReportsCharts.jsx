import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

export default function ReportsCharts() {
  return (
    <Grid container spacing={3}>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" mb={2}>
            Revenue Analytics
          </Typography>

          {/* chart disini */}
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" mb={2}>
            Orders Analytics
          </Typography>

          {/* chart disini */}
        </Paper>
      </Grid>

    </Grid>
  );
}