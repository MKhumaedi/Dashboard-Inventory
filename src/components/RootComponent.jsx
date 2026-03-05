import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import NavBarComponent from "../components/NavBarComponent";
import SideBarComponent from "../components/SideBarComponent";
import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";

export default function RootComponent() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>

      <NavBarComponent toggleSidebar={toggleSidebar} />

      <Box sx={{ display: "flex", flex: 1 }}>

        <SideBarComponent sidebarOpen={sidebarOpen} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: "#00ffff",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Toolbar />

          {/* PAGE CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Outlet />
          </Box>

          {/* FOOTER */}
          <FooterComponent />

        </Box>
      </Box>
    </Box>
  );
}