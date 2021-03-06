import React from "react";

export default function HomePage() {
  return (
    <div
      className="text-center d-flex flex-column"
      style={{ display: "inline-block" }}
    >
      <h1 className="cover-heading">Welcome To The Zoo</h1>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Blank_Park_Zoo_Entrance.jpg"
          alt="hadera picturer"
          style={{
            width: "550px",
            height: "auto",
            maxWidth: "80%",
            margin: "25px",
          }}
        />
      </div>
    </div>
  );
}
