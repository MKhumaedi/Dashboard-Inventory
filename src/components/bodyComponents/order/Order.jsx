import React, { Component } from "react";
import OrderList from "./OrderList";
import { Box, Typography } from "@mui/material";

export default class Order extends Component {

  render() {
    return (
      <Box
        sx={{
          width: "100%",
          px: { xs: 1, sm: 2, md: 3 },
          py: { xs: 2, md: 3 },
        }}
      >

        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            p: { xs: 2, sm: 3 },
            boxShadow: 1,
            width: "100%",
            overflowX: "auto",
          }}
        >

          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Orders
          </Typography>

          <OrderList />

        </Box>

      </Box>
    );
  }
}