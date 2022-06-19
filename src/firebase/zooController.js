import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./config";

const animalsCol = "animals";

export const getAnimals = async () => {
  // get the collection from the db
  const animalsCol = collection(db, animalsCol);
  // get the docs from  the collection
  const animalsSnapshot = await getDocs(animalsCol);
  const animalsList = animalsSnapshot.docs.map((doc) => {
    return { id: doc.id, data: doc.data() };
  });

  return animalsList;
};

export const updateAnimal = async (id, data) => {
  const animalDocRef = doc(db, animalsCol, id);
  try {
    await updateDoc(animalDocRef, data);
  } catch (e) {
    console.error("Error update document: ", e);
  }
};

export const addAnimal = async (doc) => {
  try {
    const docRef = await addDoc(collection(db, animalsCol), doc);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
