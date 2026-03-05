import React, { Component } from "react";
import RevenueCard from "./RevenueCard";
import { Box, Grid } from "@mui/material";
import RevenueCostChart from "./RevenueCostChart";
import BestSelledProductChart from "./BestSelledProductChart";
import BestSelledProductChartBar from "./BestSelledProductChartBar";

export default class Revenue extends Component {

  render() {

    const revenuCards = [

      {
        isMoney: true,
        number: "23 000",
        percentage: 55,
        upOrDown: "up",
        color: "green",
        title: "Total Sales This Year",
        subTitle: "vs prev year",
      },

      {
        isMoney: true,
        number: "3500",
        percentage: 70,
        upOrDown: "up",
        color: "green",
        title: "Revenue This Year",
        subTitle: "vs prev year",
      },

      {
        isMoney: true,
        number: "2000",
        percentage: 12,
        upOrDown: "down",
        color: "red",
        title: "Cost This Year",
        subTitle: "vs prev year",
      },

      {
        isMoney: true,
        number: "98 000",
        percentage: undefined,
        title: "Revenue Total",
        subTitle: "vs prev year",
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

        {/* Revenue Cards */}

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


        {/* Revenue Chart */}

        <Grid container spacing={3} mt={1}>

          <Grid item xs={12}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 2
              }}
            >

              <RevenueCostChart />

            </Box>

          </Grid>

        </Grid>


        {/* Product Charts */}

        <Grid container spacing={3} mt={1}>

          <Grid item xs={12} md={6}>

            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 2,
                p: 2
              }}
            >

              <BestSelledProductChart />

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

              <BestSelledProductChartBar />

            </Box>

          </Grid>

        </Grid>

      </Box>

    );

  }

}