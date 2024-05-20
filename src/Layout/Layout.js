import React from "react";
import Navbar from "../Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <CssBaseline />

      <Navbar />

      <Outlet />
    </>
  );
}

export default Layout;
