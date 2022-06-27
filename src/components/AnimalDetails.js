import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Alert, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getAnimals } from "../firebase/zooController";
import EditAnimalData from "./EditAnimalData";

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
      <Container className=" d-flex justify-content-center">
        {isFetch && animal && (
          <Card
            style={{
              "margin-bottom": "20px",
              padding: "10px",
              minWidth: "50%",
            }}
          >
            <Card.Img
              variant="top"
              src={animal.imgUrl}
              style={{ width: "250px" }}
              className="profile-img"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>
                <span>
                  {animal.name.charAt(0).toUpperCase() + animal.name.slice(1)}
                </span>
              </Card.Title>
              <p>Number Of Legs: {animal.numberOfLegs}</p>
              <p>In Israel: {animal.inIsrael ? "Yes" : "No"}</p>
            </Card.Body>

            <Row className="justify-content-center">
              <Button
                className="w-50"
                variant="primary"
                onClick={() => setDisplayEdit(!displayEdit)}
              >
                {displayEdit ? "Close Edit" : "Edit"}
              </Button>
            </Row>
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
          </Card>
        )}

        {isFetch && !animal && (
          <Alert
            variant="danger"
            className="w-100"
            style={{ marginTop: "60px" }}
          >
            Animal with the id {id} was not found
          </Alert>
        )}
      </Container>
      <br />
      <Link
        to={"/zoo"}
        className="d-flex justify-content-center"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="dark"
          type="submit"
          className="w-50"
          style={{ maxWidth: "350px" }}
        >
          Go Back
        </Button>
      </Link>
    </>
  );
}
