import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimals } from "../firebase/zooController";
import EditAnimalData from "./EditAnimalData";
import { Link } from "react-router-dom";

export default function AnimalDetails() {
  const id = useParams().animalId;

  const [animal, setAnimal] = useState();
  const [displayEdit, setDisplayEdit] = useState(false);

  const [isFetch, setIsFetch] = useState(false);

  useLayoutEffect(() => {
    getAnimals().then((animals) => {
      let animal = animals.find((animal) => animal.id === id);
      if (animal) setAnimal(animal.data);
      setIsFetch(true);
    });
  }, [id]);

  const refreshData = () => {
    getAnimals().then((animals) => {
      setAnimal(animals.find((animal) => animal.id === id).data);
    });
  };

  return (
    <>
      {isFetch && animal && (
        <div className="card">
          <div className="row">
            <div className="card-body col-sm-6">
              <h5 className="card-title">{animal.name}</h5>
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
                setDisplayEdit(false);

                alert("change successfully");
              }}
            />
          )}
        </div>
      )}

      {isFetch && !animal && (
        <h3 style={{ color: "red" }}>Animal with the id {id} not found</h3>
      )}

      <br />
      <Link to={"/zoo"}>
        <button type="button" className="btn btn-dark">
          Back
        </button>
      </Link>
    </>
  );
}
