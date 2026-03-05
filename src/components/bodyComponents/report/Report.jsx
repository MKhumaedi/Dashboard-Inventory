import React from "react";
import { Box } from "@mui/material";
import ReportsHeader from "./ReportsHeader";
import ReportsCards from "./ReportsCard";
import ReportsCharts from "./ReportsCharts";
import ReportsTable from "./ReportsTable";

export default function Reports() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 1, sm: 2, md: 3 },
        py: { xs: 2, md: 3 },
        display: "flex",
        flexDirection: "column",
        gap: 3
      }}
    >
      <ReportsHeader />
      <ReportsCards />
      <ReportsCharts />
      <ReportsTable />
    </Box>
  );
}