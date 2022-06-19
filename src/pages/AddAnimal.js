import React, { useState } from "react";

import { addAnimal } from "../firebase/zooController";

export default function AddAnimal() {
  function submitData() {
    let animal = {
      name: name,
      imgUrl: imgUrl,
      type: type,
      inIsrael: inIsrael,
      numberOfLegs: numberOfLegs,
    };
    addAnimal(animal);
  }

  // const [name, setName] = useState(animal.name);
  // const [imgUrl, setImgUrl] = useState(animal.imgUrl);
  // const [type, setType] = useState(animal.type);
  // const [inIsrael, setInIsrael] = useState(animal.inIsrael);
  // const [numberOfLegs, setNumberOfLegs] = useState(animal.numberOfLegs);

  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [type, setType] = useState("");
  const [inIsrael, setInIsrael] = useState(false);
  const [numberOfLegs, setNumberOfLegs] = useState(0);

  return (
    <div>
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
          >
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
