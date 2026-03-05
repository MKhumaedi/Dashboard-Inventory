import React, { Component } from "react";
import { Box, Grid } from "@mui/material";

import UilReceipt from "@iconscout/react-unicons/icons/uil-receipt";
import UilBox from "@iconscout/react-unicons/icons/uil-box";
import UilTruck from "@iconscout/react-unicons/icons/uil-truck";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";

import InfoCard from "../../subComponents/InfoCard";
import TotalSales from "./TotalSales";
import SalesByCity from "./SalesByCity";
import Channels from "./Channels";
import TopSellingProduct from "./TopSellingProduct";

export default class Home extends Component {
  render() {
    const data = {};

    const cardComponent = [
      {
        icon: <UilBox size={60} color={"#F6F4EB"} />,
        title: "Picked",
        subTitle: "1256",
      },
      {
        icon: <UilTruck size={60} color={"#F6F4EB"} />,
        title: "Shipped",
        subTitle: "12",
      },
      {
        icon: <UilCheckCircle size={60} color={"#F6F4EB"} />,
        title: "Delivered",
        subTitle: "15",
      },
      {
        icon: <UilReceipt size={60} color={"#F6F4EB"} />,
        title: "Invoice",
        subTitle: "07",
      },
    ];

    return (
      <Box
        sx={{
          p: 3,
          width: "100%",
        }}
      >
        {/* INFO CARDS */}

        <Grid container spacing={3}>
          {cardComponent.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <InfoCard card={card} />
            </Grid>
          ))}
        </Grid>

        {/* SALES + CITY */}

        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} md={8}>
            <TotalSales data={data} />
          </Grid>

          <Grid item xs={12} md={4}>
            <SalesByCity data={data} />
          </Grid>
        </Grid>

        {/* CHANNELS + TABLE */}

        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} md={6}>
            <Channels />
          </Grid>

          <Grid item xs={12} md={6}>
            <TopSellingProduct />
          </Grid>
        </Grid>
      </Box>
    );
  }
}