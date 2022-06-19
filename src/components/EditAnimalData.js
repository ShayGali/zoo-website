import React, { useState } from "react";
import { getAnimals, updateAnimal } from "../firebase/zooController";

export default function EditAnimalData({
  id,
  editTitle,
  editDesc,
  finishEdit,
}) {
  // Allow the user to edit 2 fields for each task:
  const [title, setTitle] = useState(editTitle);
  const [description, setDescription] = useState(editDesc);

  const handleUpdate = async (e) => {
    // will not reload the page - keep the changes
    e.preventDefault();
    try {
      await updateAnimal(id, { title, description });
      finishEdit();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div style={{ backgroundColor: "lightgray", padding: 10, marginTop: 5 }}>
      <form onSubmit={handleUpdate}>
        <label>Edit title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="form-control"
        />

        <label>Edit description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="form-control"
        ></textarea>

        <br />

        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </form>
    </div>
  );
}
