import React from "react";
import { Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, name: "January Report", date: "2025-01-01", revenue: "$5000" },
  { id: 2, name: "February Report", date: "2025-02-01", revenue: "$7000" },
  { id: 3, name: "March Report", date: "2025-03-01", revenue: "$9000" }
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Report Name", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "revenue", headerName: "Revenue", flex: 1 }
];

export default function ReportsTable() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2
      }}
    >
      <Typography variant="h6" mb={2}>
        Reports History
      </Typography>

      <div style={{ height: 400 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </Paper>
  );
}