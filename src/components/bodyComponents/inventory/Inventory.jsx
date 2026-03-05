import { Grid, Box, Typography } from "@mui/material";
import React, { Component } from "react";
import Products from "./Products";
import Overview from "./Overview";

export default class Inventory extends Component {

  render() {

    return (
      <Box sx={{ p: 2 }}>

        <Grid container spacing={3}>

          {/* PRODUCTS SECTION */}

          <Grid item xs={12} md={9}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 3,
                height: "100%",
                boxShadow: 1,
              }}
            >

              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                }}
              >
                Inventory
              </Typography>

              <Products />

            </Box>

          </Grid>


          {/* OVERVIEW SECTION */}

          <Grid item xs={12} md={3}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 3,
                height: "100%",
                boxShadow: 1,
              }}
            >

              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                }}
              >
                Overview
              </Typography>

              <Overview />

            </Box>

          </Grid>

        </Grid>

      </Box>
    );
  }
}