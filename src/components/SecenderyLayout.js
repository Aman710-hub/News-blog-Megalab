import React from "react";
import { Outlet } from "react-router";
import Footre from "./Footre";
import Navbar from "./Navbar";
const SecenderyLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footre />
    </>
  );
};

export default SecenderyLayout;
