import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid
} from "@mui/material";

import { DeleteOutline } from "@mui/icons-material";
import React from "react";

export default function OrderModal({ order }) {

  const handleDeleteProductFromOrder = (orderId, productId) => {
    console.log("delete product:", productId, "from order:", orderId);
  };

  const tableRows = order.products.map((orderProduct, index) => (
    <TableRow key={index}>

      <TableCell>
        {orderProduct.product.name}
      </TableCell>

      <TableCell>
        {orderProduct.quantity}
      </TableCell>

      <TableCell>
        {orderProduct.product.stock}
      </TableCell>

      <TableCell>

        <IconButton
          onClick={() =>
            handleDeleteProductFromOrder(order.id, orderProduct.product.id)
          }
        >
          <DeleteOutline color="error" />
        </IconButton>

      </TableCell>

    </TableRow>
  ));

  return (

    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",

        width: { xs: "95%", sm: "90%", md: "70%", lg: "50%" },

        maxHeight: "90vh",
        overflowY: "auto",

        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 24,
        p: { xs: 2, md: 4 },
      }}
    >

      {/* HEADER */}

      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: "bold"
        }}
      >
        Order Details
      </Typography>


      {/* CUSTOMER INFO */}

      <Grid container spacing={2} mb={3}>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2">
            Name
          </Typography>

          <Typography color="grey">
            {order.customer.firstName} {order.customer.lastName}
          </Typography>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2">
            Position
          </Typography>

          <Typography color="grey">
            {order.customer.position}
          </Typography>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2">
            Mobile
          </Typography>

          <Typography color="grey">
            {order.customer.mobile}
          </Typography>
        </Grid>

      </Grid>


      {/* PRODUCT TABLE */}

      <TableContainer
        component={Paper}
        sx={{
          overflowX: "auto",
          mb: 3
        }}
      >

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell></TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {tableRows}

          </TableBody>

        </Table>

      </TableContainer>


      {/* ACTION BUTTONS */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
          mt: 2,
          flexWrap: "wrap"
        }}
      >

        <Button
          variant="outlined"
          color="error"
          sx={{
            minWidth: 120
          }}
        >
          Reject
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#504099",
            minWidth: 140
          }}
        >
          Approve
        </Button>

      </Box>

    </Box>

  );
}