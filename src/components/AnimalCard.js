import React from "react";
import { Card, Button } from "react-bootstrap";
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
    <Card className="h-90">
      <Card.Img
        variant="top"
        src={animal.imgUrl}
        height="350px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <span>
            {animal.name.charAt(0).toUpperCase() + animal.name.slice(1)}
          </span>
        </Card.Title>
        <Card.Body>
          <p>Number Of Legs: {animal.numberOfLegs}</p>
          <p>In Israel: {animal.inIsrael ? "Yes" : "No"}</p>
          <Link to={id}>
            <Button variant="primary" className="w-100">
              View Data
            </Button>
          </Link>
          <Button
            variant="danger"
            className="w-100"
            onClick={deleteAnimalHandler}
          >
            Delete
          </Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}
