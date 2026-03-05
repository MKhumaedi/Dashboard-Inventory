import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";

import {
  HomeOutlined,
  Inventory2Outlined,
  SettingsOutlined,
  DescriptionOutlined,
  MonetizationOnOutlined,
  CardTravelOutlined,
  TrendingUpOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";

import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

export default function SideBarComponent({ sidebarOpen }) {

  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    { name: "Home", icon: <HomeOutlined />, path: "/home" },
    { name: "Inventory", icon: <Inventory2Outlined />, path: "/inventory" },
    { name: "Orders", icon: <CardTravelOutlined />, path: "/orders" },
    { name: "Customers", icon: <PeopleAltOutlined />, path: "/customers" },
    { name: "Revenue", icon: <MonetizationOnOutlined />, path: "/revenue" },
    { name: "Growth", icon: <TrendingUpOutlined />, path: "/growth" },
    { name: "Reports", icon: <DescriptionOutlined />, path: "/reports" },
    { name: "Settings", icon: <SettingsOutlined />, path: "/settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      open={sidebarOpen}
      sx={{
        width: sidebarOpen ? drawerWidth : 0,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: sidebarOpen ? drawerWidth : 0,
          transition: "width 0.3s ease",
          overflowX: "hidden",
          boxSizing: "border-box",
          borderRight: "1px solid #eee",
        },
      }}
    >
      <Toolbar />

      {sidebarOpen && (
        <List>

          {menus.map((menu) => (

            <ListItemButton
              key={menu.name}
              selected={location.pathname === menu.path}
              onClick={() => navigate(menu.path)}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 2,
              }}
            >

              <ListItemIcon>

                {menu.icon}

              </ListItemIcon>

              <ListItemText primary={menu.name} />

            </ListItemButton>

          ))}

        </List>
      )}

    </Drawer>
  );
}