import React from "react";
import { Outlet } from "react-router";
import Footre from "./Footre";
import Hero from "./Hero";

const MainLayout = () => {
  return (
    <>
      <Hero />
      <Outlet />
      <Footre />
    </>
  );
};

export default MainLayout;
