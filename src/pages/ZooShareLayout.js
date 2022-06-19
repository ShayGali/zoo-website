import React from "react";
import { Outlet } from "react-router-dom";

export default function ZooShareLayout() {
  return (
    <>
      <h2>ZooShareLayout</h2>
      <Outlet />
    </>
  );
}
