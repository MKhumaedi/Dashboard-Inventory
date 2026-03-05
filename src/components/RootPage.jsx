import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const cardStyle = {
  p: 3,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function RootPage() {
  return (
    <Box p={3}>
      {/* Greeting */}
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Welcome Back 👋
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Here's what's happening with your store today.
      </Typography>

      {/* Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={cardStyle}>
            <Box>
              <Typography variant="h6">Inventory</Typography>
              <Typography variant="h4" fontWeight="bold">
                1,240
              </Typography>
            </Box>
            <Inventory2OutlinedIcon fontSize="large" color="primary" />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={cardStyle}>
            <Box>
              <Typography variant="h6">Orders</Typography>
              <Typography variant="h4" fontWeight="bold">
                320
              </Typography>
            </Box>
            <ShoppingCartOutlinedIcon fontSize="large" color="primary" />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={cardStyle}>
            <Box>
              <Typography variant="h6">Customers</Typography>
              <Typography variant="h4" fontWeight="bold">
                892
              </Typography>
            </Box>
            <PeopleOutlineOutlinedIcon fontSize="large" color="primary" />
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={cardStyle}>
            <Box>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="h4" fontWeight="bold">
                $12,430
              </Typography>
            </Box>
            <AttachMoneyOutlinedIcon fontSize="large" color="primary" />
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box mt={4}>
        <Grid container spacing={3}>
          
          {/* Recent Orders */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" mb={2}>
                Recent Orders
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>#1001</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>$240</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>#1002</TableCell>
                    <TableCell>Michael</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>$120</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>#1003</TableCell>
                    <TableCell>Sara</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>$560</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>

          {/* Activity */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" mb={2}>
                Recent Activity
              </Typography>

              <Typography mb={1}>📦 New order from John</Typography>
              <Typography mb={1}>👤 New customer registered</Typography>
              <Typography mb={1}>💰 Payment received</Typography>
              <Typography mb={1}>📊 Revenue updated</Typography>
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}