import React, { useEffect, useState } from "react";
import { getAnimals } from "../firebase/zooController";
import AnimalCard from "../components/AnimalCard";

export default function Zoo() {
  const [animals, setAnimals] = useState([]);

  const [displayAnimals, SetDisplayAnimals] = useState([]);
  const [displayType, setDisplayType] = useState("");

  useEffect(() => {
    SetDisplayAnimals(
      animals.filter((animal) => animal.data.type === displayType)
    );
  }, [displayType, animals]);

  useEffect(() => {
    getAnimals().then((animals) => {
      setAnimals(animals);
    });
  }, []);

  const refreshData = () => {
    getAnimals().then((animals) => {
      setAnimals(animals);
    });
  };
  return (
    <div>
      <button
        className="btn btn-outline-info"
        onClick={() => setDisplayType("sea")}
      >
        show see animals
      </button>
      <button
        className="btn btn-outline-warning"
        onClick={() => setDisplayType("land")}
      >
        show land animals
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setDisplayType("air")}
      >
        show air animals
      </button>

      <div className="row">
        {displayAnimals.map((animal) => {
          return (
            <AnimalCard
              animal={animal.data}
              id={animal.id}
              refreshData={refreshData}
              key={animal.id}
            />
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
}
