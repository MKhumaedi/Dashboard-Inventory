import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";

import {
  NotificationsOutlined,
  Settings,
  Logout,
  AccountCircleOutlined,
  Menu as MenuIcon
} from "@mui/icons-material";

import React, { useState } from "react";

export default function NavBarComponent({ toggleSidebar }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [notifEl, setNotifEl] = useState(null);

  const open = Boolean(anchorEl);
  const notifOpen = Boolean(notifEl);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>

        {/* Toggle Sidebar */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard GNI
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>

          <IconButton
            color="inherit"
            onClick={(e) => setNotifEl(e.currentTarget)}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsOutlined />
            </Badge>
          </IconButton>

          <Menu
            anchorEl={notifEl}
            open={notifOpen}
            onClose={() => setNotifEl(null)}
          >
            <MenuItem>New Order</MenuItem>
            <MenuItem>New Customer</MenuItem>
            <MenuItem>Server Update</MenuItem>
          </Menu>

          <IconButton
            color="inherit"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <Avatar>M</Avatar>
          </IconButton>

          <Typography>M KHUMAEDI</Typography>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >

            <MenuItem>
              <ListItemIcon>
                <AccountCircleOutlined fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>

            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>

            <Divider />

            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>

          </Menu>

        </Box>

      </Toolbar>
    </AppBar>
  );
}