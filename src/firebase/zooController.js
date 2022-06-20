import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

const ANIMALS_COL = "animals";

export const getAnimals = async () => {
  // get the collection from the db
  const animalsCol = collection(db, ANIMALS_COL);
  // get the docs from  the collection
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
    const docRef = await addDoc(collection(db, ANIMALS_COL), doc);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
