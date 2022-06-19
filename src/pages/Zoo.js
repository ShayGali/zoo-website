import React from "react";
import { Link } from "react-router-dom";
export default function Zoo() {
  return (
    <div>
      {" "}
      <Link to="5">
        <button className="btn btn-primary">Click Me!</button>
      </Link>
    </div>
  );
}
