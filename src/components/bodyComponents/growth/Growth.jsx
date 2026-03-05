import React, { Component } from "react";
import { Box, Grid } from "@mui/material";
import RevenueCard from "../revenue/RevenueCard";
import VisitorsGrowthCharts from "./VisitorsGrowthCharts";
import ProductsGrowthCharts from "./ProductsGrowthCharts";
import CustomersGrowthCharts from "./CustomersGrowthCharts";
import SalesGrowthCharts from "./SalesGrowthCharts";

export default class Growth extends Component {

  render() {

    const revenuCards = [

      {
        isMoney: false,
        number: "330",
        percentage: 11,
        upOrDown: "down",
        color: "red",
        title: "Orders Per Month",
        subTitle: "vs prev month",
      },

      {
        isMoney: false,
        number: "109",
        percentage: 35,
        upOrDown: "up",
        color: "green",
        title: "Total Customer",
        subTitle: "vs prev year",
      },

      {
        isMoney: false,
        number: "607",
        percentage: 10,
        upOrDown: "up",
        color: "green",
        title: "Total Product",
        subTitle: "vs prev month",
      },

      {
        isMoney: false,
        number: "1200",
        percentage: "30",
        title: "Total Visitors",
        color: "green",
        subTitle: "vs prev week",
      },

    ];

    return (

      <Box
        sx={{
          width: "100%",
          px: { xs: 1, sm: 2, md: 3 },
          py: { xs: 2, md: 3 }
        }}
      >

        {/* CARD SECTION */}

        <Grid container spacing={3}>

          {revenuCards.map((card, index) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >

              <RevenueCard card={card} />

            </Grid>

          ))}

        </Grid>


        {/* CHART ROW 1 */}

        <Grid container spacing={3} mt={1}>

          <Grid item xs={12} md={6}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 2
              }}
            >

              <SalesGrowthCharts />

            </Box>

          </Grid>


          <Grid item xs={12} md={6}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 2
              }}
            >

              <VisitorsGrowthCharts />

            </Box>

          </Grid>

        </Grid>


        {/* CHART ROW 2 */}

        <Grid container spacing={3} mt={1}>

          <Grid item xs={12} md={6}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 2
              }}
            >

              <ProductsGrowthCharts />

            </Box>

          </Grid>


          <Grid item xs={12} md={6}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 2
              }}
            >

              <CustomersGrowthCharts />

            </Box>

          </Grid>

        </Grid>

      </Box>

    );

  }

}