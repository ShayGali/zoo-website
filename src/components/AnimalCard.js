import React from "react";
import { deleteAnimal } from "../firebase/zooController";
import { Link } from "react-router-dom";
export default function AnimalCard({ id, animal, refreshData }) {
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
            <Link to={id}>
              <button className="btn btn-primary">View Data</button>
            </Link>
            <button className="btn btn-danger" onClick={deleteAnimalHandler}>
              Delete
            </button>
          </div>
          <div className="col-sm-6 image-container">
            <img src={animal.imgUrl} alt="" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
