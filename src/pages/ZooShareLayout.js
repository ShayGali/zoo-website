import React from "react";
import { Outlet } from "react-router-dom";
export default function ZooShareLayout() {
  return (
    <>
      <h2>Our animals</h2>
      <Outlet />
    </>
  );
}
