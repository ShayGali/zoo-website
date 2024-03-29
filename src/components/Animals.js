import React, { useEffect, useState } from "react";
import { getAnimals } from "../firebase/zooController";
import AnimalCard from "./AnimalCard";
import { Col, Row, Button } from "react-bootstrap";
export default function Animals() {
  const [animals, setAnimals] = useState([]);

  const [displayAnimals, SetDisplayAnimals] = useState([]);
  const [displayType, setDisplayType] = useState("");

  useEffect(() => {
    SetDisplayAnimals(
      animals.filter((animal) => animal.data.type === displayType)
    );
  }, [displayType, animals]);

  useEffect(() => {
    getAnimals()
      .then((animals) => {
        setAnimals(animals);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const refreshData = () => {
    getAnimals()
      .then((animals) => {
        setAnimals(animals);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Row xs={1} md={1} lg={3} className="g-2">
        <Col className="d-flex justify-content-center">
          <Button
            variant="info"
            className="w-50"
            onClick={() => setDisplayType("sea")}
          >
            show sea animals
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button
            variant="warning"
            className="w-50"
            onClick={() => setDisplayType("land")}
          >
            show land animals
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button
            variant="success"
            className="w-50"
            onClick={() => setDisplayType("air")}
          >
            show air animals
            {/*This code belongs to ShayG*/}
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-3 m-1">
        {displayAnimals.map((animal) => {
          return (
            <Col key={animal.id}>
              <AnimalCard
                animal={animal.data}
                id={animal.id}
                refreshData={refreshData}
              />
            </Col>
          );
        })}
      </Row>
      <br />
      <br />
    </div>
  );
}
