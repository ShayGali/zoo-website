import React, { useState } from "react";
import { updateAnimal } from "../firebase/zooController";

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
    <form
      onSubmit={submitChange}
      style={{ backgroundColor: "lightgray", padding: 10, marginTop: 5 }}
    >
      {!validInputs && (
        <p>
          The Fields:{" "}
          {inValidInputs.map((i) => (
            <span style={{ color: "red" }}>{i + ", "}</span>
          ))}{" "}
          are invalid
        </p>
      )}
      <div>
        <label>Edit Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="form-control"
        />

        <label>Edit Number Of Legs</label>
        <input
          type="number"
          onChange={(e) => setNumberOfLegs(e.target.value)}
          value={numberOfLegs}
          className="form-control"
        />

        <label>Edit Image Url</label>
        <input
          type="test"
          onChange={(e) => setImgUrl(e.target.value)}
          value={imgUrl}
          className="form-control"
        />

        <label>Type:</label>
        <select
          className="form-control"
          onChange={(e) => setType(e.target.value)}
          defaultValue={type}
        >
          <option value={"air"}>Air</option>
          <option value={"sea"}>Sea</option>
          <option value={"land"}>Land</option>
        </select>
        <br />
        <label className="form-check-label">In Israel: </label>
        <input
          type="checkbox"
          className="form-check-input"
          defaultChecked={inIsrael}
          onClick={() => setInIsrael(!inIsrael)}
        />

        <br />

        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </form>
  );
}
