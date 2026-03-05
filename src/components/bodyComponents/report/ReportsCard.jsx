import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const cards = [
  { title: "Total Orders", value: "1,200" },
  { title: "Revenue", value: "$23,000" },
  { title: "Customers", value: "450" },
  { title: "Products Sold", value: "980" }
];

export default function ReportsCards() {
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: 2
            }}
          >
            <Typography variant="subtitle2" color="gray">
              {card.title}
            </Typography>

            <Typography variant="h5" fontWeight="bold">
              {card.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}