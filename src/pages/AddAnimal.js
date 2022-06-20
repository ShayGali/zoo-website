import React, { useState } from "react";

import { addAnimal } from "../firebase/zooController";

export default function AddAnimal() {
  function submitData() {
    if (name === "" || imgUrl === "" || type === "" || numberOfLegs < 0) {
      let arr = [];
      setValidInputs(false);

      if (imgUrl === "") {
        arr.push("Name");
      }
      if (imgUrl === "") {
        arr.push("Image Url");
      }
      if (type === "") {
        arr.push("Type");
      }
      if (numberOfLegs < 0) {
        arr.push("Number Of Legs");
      }
      setInValidInputs(arr);

      return;
    }

    setValidInputs(true);
    let animal = {
      name: name,
      imgUrl: imgUrl,
      type: type,
      inIsrael: inIsrael,
      numberOfLegs: numberOfLegs,
    };
    clearFields();
    addAnimal(animal);
  }

  function clearFields() {
    setName("");
    setImgUrl("");
    setType("");
    setInIsrael(false);
    setNumberOfLegs(0);
  }

  const [validInputs, setValidInputs] = useState(true);
  const [inValidInputs, setInValidInputs] = useState([]);

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [type, setType] = useState("");
  const [inIsrael, setInIsrael] = useState(false);
  const [numberOfLegs, setNumberOfLegs] = useState(0);

  return (
    <div>
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
      <div className="row">
        <div className="form-group col-md-6">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Image Url:</label>
          <input
            type="text"
            className="form-control"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Number Of legs:</label>
          <input
            type="number"
            className="form-control"
            value={numberOfLegs}
            onChange={(e) => setNumberOfLegs(e.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Type:</label>
          <select
            className="form-control"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value={""}>Choses...</option>
            <option value={"air"}>Air</option>
            <option value={"sea"}>Sea</option>
            <option value={"land"}>Land</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label className="form-check-label">In Israel: </label>
          <input
            type="checkbox"
            className="form-check-input"
            onClick={() => setInIsrael(!inIsrael)}
            checked={inIsrael}
          />
        </div>
      </div>
      <br />
      <button className="btn btn-success" onClick={submitData}>
        Submit
      </button>
    </div>
  );
}
