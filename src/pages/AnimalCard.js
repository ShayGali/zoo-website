import React, { useState } from "react";
import EditAnimalData from "../components/EditAnimalData";

export default function AnimalCard({ id, animal, refreshData }) {
  const [displayEdit, setDisplayEdit] = useState(false);
  return (
    <div className="col-sm-6">
      <div className="card animal-card">
        <div className="row">
          <div className="card-body col-sm-6">
            <p>Name: {animal.name}</p>
            <p>Number Of Legs: {animal.numberOfLegs}</p>
            <p>In Israel: {animal.inIsrael ? "Yes" : "No"}</p>
            <button
              className="btn btn-primary"
              onClick={() => setDisplayEdit(!displayEdit)}
            >
              {displayEdit ? "Close Edit" : "Edit"}
            </button>
          </div>
          <div className="col-sm-6 image-container">
            <img src={animal.imgUrl} alt="" className="profile-img" />
          </div>
        </div>
        {displayEdit && (
          <EditAnimalData
            id={id}
            animal={animal}
            finishEdit={() => {
              refreshData();
              alert("change successfully");
              setDisplayEdit(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
