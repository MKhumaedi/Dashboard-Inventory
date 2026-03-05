import { Avatar, Box, Button, Typography, Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Component } from "react";
import OrderModal from "./OrderModal";
import NewModal from "./NewModal";
import orders from "./listOrders";

export default class OrderList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      order: {},
      open: false,
      openNewOrder: false
    };
  }

  handlOrderDetail = (order) => {
    this.setState({ order: order, open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpenNewOrder = () => {
    this.setState({ openNewOrder: true });
  };

  handleCloseNewOrder = () => {
    this.setState({ openNewOrder: false });
  };

  render() {

    const columns = [

      {
        field: "id",
        headerName: "ID",
        width: 70
      },

      {
        field: "fullname",
        headerName: "Customer",
        flex: 1,

        renderCell: (params) => {

          const first = params.row.customer.firstName;
          const last = params.row.customer.lastName;

          return (

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>

              <Avatar sx={{ width: 28, height: 28 }}>
                {first?.charAt(0)}
              </Avatar>

              <Typography fontSize={14}>
                {first} {last}
              </Typography>

            </Box>

          );
        },
      },

      {
        field: "mobile",
        headerName: "Mobile",
        flex: 1,
        valueGetter: (params) => params.row.customer.mobile,
      },

      {
        field: "total",
        headerName: "Total",
        flex: 1,
        valueGetter: () => "$300",
      },

      {
        field: "details",
        headerName: "Action",
        width: 150,

        renderCell: (params) => {

          const order = params.row;

          return (

            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#504099",
                textTransform: "none",
                borderRadius: 2
              }}
              onClick={() => this.handlOrderDetail(order)}
            >
              Details
            </Button>

          );
        },
      },
    ];

    return (

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: 3,
          boxShadow: 2
        }}
      >

        {/* HEADER */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2
          }}
        >

          <Typography variant="h6">
            Orders
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#504099",
              borderRadius: 2,
              textTransform: "none"
            }}
            onClick={this.handleOpenNewOrder}
          >
            New Order
          </Button>

        </Box>

        {/* TABLE */}

        <Box sx={{ height: 500, width: "100%" }}>

          <DataGrid
            rows={orders}
            columns={columns}
            pageSizeOptions={[10, 20]}
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 }
              }
            }}
            sx={{
              border: 0,

              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "#f7f7fb"
              },

              "& .MuiDataGrid-row:hover": {
                bgcolor: "#f5f5ff"
              }

            }}
          />

        </Box>

        {/* ORDER DETAILS MODAL */}

        <Modal open={this.state.open} onClose={this.handleClose}>
          <Box>
            <OrderModal order={this.state.order} />
          </Box>
        </Modal>

        {/* NEW ORDER MODAL */}

        <NewModal
          open={this.state.openNewOrder}
          handleClose={this.handleCloseNewOrder}
        />

      </Box>

    );
  }
}