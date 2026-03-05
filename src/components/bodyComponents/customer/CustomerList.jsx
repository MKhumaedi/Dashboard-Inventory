import { Component } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import customers from "./Customers";

export default class CustomerList extends Component {

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
        minWidth: 200,

        renderCell: (params) => {

          return (

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1
              }}
            >

              <Avatar
                variant="square"
                sx={{
                  width: 30,
                  height: 30,
                  borderRadius: 1,
                  fontSize: 14
                }}
              >
                {params.row.firstName?.charAt(0)}
              </Avatar>

              <Typography fontSize={14}>
                {params.row.firstName} {params.row.lastName}
              </Typography>

            </Box>

          );

        },
      },

      {
        field: "orderNumber",
        headerName: "Orders",
        flex: 1,
        minWidth: 120,
        valueGetter: (params) => params.row.orders.length,
      },

      {
        field: "total",
        headerName: "Total",
        flex: 1,
        minWidth: 140,
        valueGetter: () => "$300",
      },

      {
        field: "orderHistory",
        headerName: "Last Order",
        flex: 1,
        minWidth: 140,
        valueGetter: () => "03/01/2027",
      },

      {
        field: "mobile",
        headerName: "Mobile",
        flex: 1,
        minWidth: 160,
      },

    ];

    return (

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 2,
          p: { xs: 2, md: 3 },
          boxShadow: 2,
          width: "100%"
        }}
      >

        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600 }}
        >
          Customers
        </Typography>

        <Box
          sx={{
            height: { xs: 420, md: 520 },
            width: "100%"
          }}
        >

          <DataGrid

            rows={customers}
            columns={columns}

            pageSizeOptions={[10, 20, 30]}

            initialState={{
              pagination: {
                paginationModel: { pageSize: 10 }
              }
            }}

            disableRowSelectionOnClick

            sx={{

              border: 0,

              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "#f7f7fb",
                fontWeight: "bold"
              },

              "& .MuiDataGrid-row:hover": {
                bgcolor: "#f5f5ff"
              }

            }}

          />

        </Box>

      </Box>

    );

  }

}