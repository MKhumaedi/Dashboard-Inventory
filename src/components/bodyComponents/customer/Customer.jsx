import React, { Component } from "react";
import CustomerList from "./CustomerList";
import { Box, Typography } from "@mui/material";

export default class Customer extends Component {

  render() {

    return (

      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",

          px: { xs: 1, sm: 2, md: 3 },
          py: { xs: 2, md: 3 },

          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >

        {/* Page Title */}



        {/* Customer Table */}

        <Box
          sx={{
            width: "100%",
            flexGrow: 1
          }}
        >
          <CustomerList />
        </Box>

      </Box>

    );

  }

}