import Inter from "./assets/fonts/Inter.ttf";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import RootComponent from "./components/RootComponent";
import RootPage from "./components/RootPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/bodyComponents/Home/Home";
import Inventory from "./components/bodyComponents/inventory/Inventory";
import Customer from "./components/bodyComponents/customer/Customer";
import Revenue from "./components/bodyComponents/revenue/Revenue";
import Growth from "./components/bodyComponents/growth/Growth";
import Report from "./components/bodyComponents/report/Report";
import Setting from "./components/bodyComponents/Settings/Setting";
import Order from "./components/bodyComponents/order/Order";

function App() {
  const theme = createTheme({
    spacing: 4,

    palette: {
      mode: "light",
    },

    typography: {
      fontFamily: "Inter, sans-serif",
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url(${Inter}) format('truetype');
          }
        `,
      },
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<RootPage />} />
        <Route path="home" element={<Home />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="orders" element={<Order />} />
        <Route path="customers" element={<Customer />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="growth" element={<Growth />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Setting />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;