import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FooterComponent() {
  const year = new Date().getFullYear();

  const github = "https://github.com/MKhumaedi";
  const linkedin = "https://linkedin.com/in/m-khumaedi";

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 4,
        py: { xs: 2, md: 2 },
        px: { xs: 2, sm: 3, md: 4 },
        borderTop: "1px solid #e0e0e0",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: "center",
        textAlign: { xs: "center", sm: "left" },
        gap: { xs: 1, sm: 2 },
        flexWrap: "wrap",
      }}
    >
      {/* LEFT */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
      >
        © {year} Dashboard Inventory
      </Typography>

      {/* RIGHT */}
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
        >
          Developed by
        </Typography>

        <Link
          href={linkedin}
          target="_blank"
          underline="hover"
          sx={{
            fontWeight: 600,
            color: "#504099",
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
          }}
        >
          M KHUMAEDI
        </Link>

        <Link
          href={github}
          target="_blank"
          color="inherit"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <GitHubIcon fontSize="small" />
        </Link>

        <Link
          href={linkedin}
          target="_blank"
          color="inherit"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <LinkedInIcon fontSize="small" />
        </Link>
      </Stack>
    </Box>
  );
}