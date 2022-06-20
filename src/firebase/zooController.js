import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";

const ANIMALS_COL = "animals";

export const getAnimals = async () => {
  const animalsCol = collection(db, ANIMALS_COL);
  const animalsSnapshot = await getDocs(animalsCol);
  const animalsList = animalsSnapshot.docs.map((doc) => {
    return { id: doc.id, data: doc.data() };
  });

  return animalsList;
};

export const updateAnimal = async (id, data) => {
  const animalDocRef = doc(db, ANIMALS_COL, id);
  try {
    await updateDoc(animalDocRef, data);
  } catch (e) {
    console.error("Error update document: ", e);
  }
};

export const addAnimal = async (doc) => {
  try {
    const animalDocRef = await addDoc(collection(db, ANIMALS_COL), doc);
    console.log("Document written with ID: ", animalDocRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteAnimal = async (id) => {
  const animalDocRef = doc(db, ANIMALS_COL, id);
  try {
    // deleteDoc() - will delete a document from the collection
    await deleteDoc(animalDocRef);
  } catch (e) {
    alert(e);
  }
};
