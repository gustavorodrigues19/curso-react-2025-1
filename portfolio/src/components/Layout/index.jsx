import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
