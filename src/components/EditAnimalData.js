import React, { useState } from "react";
import { updateAnimal } from "../firebase/zooController";
import { Form, Row, Col, Button } from "react-bootstrap";
export default function EditAnimalData({ id, animal, finishEdit }) {
  const [validInputs, setValidInputs] = useState(true);
  const [inValidInputs, setInValidInputs] = useState([]);

  const [imgUrl, setImgUrl] = useState(animal.imgUrl);
  const [inIsrael, setInIsrael] = useState(animal.inIsrael);
  const [name, setName] = useState(animal.name);
  const [numberOfLegs, setNumberOfLegs] = useState(animal.numberOfLegs);
  const [type, setType] = useState(animal.type);

  const submitChange = async (e) => {
    e.preventDefault();
    if (name === "" || imgUrl === "" || numberOfLegs < 0) {
      let arr = [];
      setValidInputs(false);
      if (imgUrl === "") {
        arr.push("Name");
      }
      if (imgUrl === "") {
        arr.push("Image gUrl");
      }
      if (numberOfLegs < 0) {
        arr.push("Number Of Legs");
      }
      setInValidInputs(arr);
      return;
    } else {
      let animalChange = {
        imgUrl: imgUrl,
        inIsrael: inIsrael,
        name: name,
        numberOfLegs: numberOfLegs,
        type: type,
      };
      await updateAnimal(id, animalChange);
      finishEdit();
    }
  };

  return (
    <Form onSubmit={submitChange} style={{ margin: "15px" }}>
      {!validInputs && (
        <p>
          The Fields:{" "}
          {inValidInputs.map((i) => (
            <span style={{ color: "red" }} key={i}>
              {i + ", "}
            </span>
          ))}{" "}
          are invalid
        </p>
      )}
      <Row xs={1} lg={2} className="g-3">
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Edit Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Animal Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Animal Image Url"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Number Of legs</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Animal Number Of legs"
              value={numberOfLegs}
              onChange={(e) => setNumberOfLegs(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Number Of legs</Form.Label>
            <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value={""}>Choses...</option>
              <option value={"air"}>Air</option>
              <option value={"sea"}>Sea</option>
              <option value={"land"}>Land</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="In Israel"
              onClick={() => setInIsrael(!inIsrael)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button
          variant="success"
          type="submit"
          className="w-50"
          style={{ maxWidth: "350px" }}
        >
          SUBMIT
        </Button>
      </Row>
    </Form>
    // <form
    //   onSubmit={submitChange}
    //   style={{ backgroundColor: "lightgray", padding: 10, marginTop: 5 }}
    // >
    // {!validInputs && (
    //   <p>
    //     The Fields:{" "}
    //     {inValidInputs.map((i) => (
    //       <span style={{ color: "red" }} key={i}>
    //         {i + ", "}
    //       </span>
    //     ))}{" "}
    //     are invalid
    //   </p>
    // )}
    //   <div>
    //     <label>Edit Name</label>
    //     <input
    //       type="text"
    //       onChange={(e) => setName(e.target.value)}
    //       value={name}
    //       className="form-control"
    //     />

    //     <label>Edit Number Of Legs</label>
    //     <input
    //       type="number"
    //       onChange={(e) => setNumberOfLegs(e.target.value)}
    //       value={numberOfLegs}
    //       className="form-control"
    //     />

    //     <label>Edit Image Url</label>
    //     <input
    //       type="test"
    //       onChange={(e) => setImgUrl(e.target.value)}
    //       value={imgUrl}
    //       className="form-control"
    //     />

    //     <label>Type:</label>
    //     <select
    //       className="form-control"
    //       onChange={(e) => setType(e.target.value)}
    //       defaultValue={type}
    //     >
    //       <option value={"air"}>Air</option>
    //       <option value={"sea"}>Sea</option>
    //       <option value={"land"}>Land</option>
    //     </select>
    //     <br />
    //     <label className="form-check-label">In Israel: </label>
    //     <input
    //       type="checkbox"
    //       className="form-check-input"
    //       defaultChecked={inIsrael}
    //       onClick={() => setInIsrael(!inIsrael)}
    //     />

    //     <br />

    //     <button type="submit" className="btn btn-primary">
    //       Save changes
    //     </button>
    //   </div>
    // </form>
  );
}
