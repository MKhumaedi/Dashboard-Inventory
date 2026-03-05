import React, { Component } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Avatar,
  Divider,
} from "@mui/material";

export default class Setting extends Component {
  render() {
    return (
      <Box
        sx={{
          width: "100%",
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >

        <Grid container spacing={3}>
          
          {/* PROFILE */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography variant="h6" mb={2}>
                Profile
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Avatar
                  sx={{ width: 80, height: 80 }}
                >
                  M
                </Avatar>

                <Button
                  variant="outlined"
                  size="small"
                >
                  Change Avatar
                </Button>

                <TextField
                  label="Full Name"
                  fullWidth
                  defaultValue=""
                />

                <TextField
                  label="Email"
                  fullWidth
                  defaultValue=""
                />

                <TextField
                  label="Phone"
                  fullWidth
                  defaultValue=""
                />

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 1,
                    bgcolor: "#504099",
                  }}
                >
                  Save Profile
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* ACCOUNT */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" mb={2}>
                Account Settings
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Username"
                    fullWidth
                    defaultValue=""
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Role"
                    fullWidth
                    defaultValue=""
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Company"
                    fullWidth
                    defaultValue=""
                  />
                </Grid>
              </Grid>

              <Box mt={3}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#504099" }}
                >
                  Update Account
                </Button>
              </Box>
            </Paper>

            {/* NOTIFICATIONS */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                mt: 3,
              }}
            >
              <Typography variant="h6" mb={2}>
                Notifications
              </Typography>

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Email Notifications"
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Order Notifications"
              />

              <FormControlLabel
                control={<Switch />}
                label="Marketing Notifications"
              />
            </Paper>

            {/* SECURITY */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
                mt: 3,
              }}
            >
              <Typography variant="h6" mb={2}>
                Security
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="New Password"
                    type="password"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Confirm Password"
                    type="password"
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Box mt={3}>
                <Button
                  variant="contained"
                  color="error"
                >
                  Change Password
                </Button>
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Box>
    );
  }
}