import React, { useState } from "react";
import EditAnimalData from "../components/EditAnimalData";
import { deleteAnimal } from "../firebase/zooController";

export default function AnimalCard({ id, animal, refreshData }) {
  const [displayEdit, setDisplayEdit] = useState(false);

  const deleteAnimalHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are You sure?")) {
      deleteAnimal(id);
      refreshData();
    }
  };
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

            <button className="btn btn-danger" onClick={deleteAnimalHandler}>
              Delete
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
