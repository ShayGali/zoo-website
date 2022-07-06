import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import ZooShareLayout from "./pages/ZooPage";
import Animals from "./components/Animals";
import AnimalDetails from "./components/AnimalDetails";
import AddAnimal from "./pages/AddAnimalPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="zoo" element={<ZooShareLayout />}>
            <Route index element={<Animals />} />
            <Route path=":animalId" element={<AnimalDetails />} />
          </Route>

          <Route path="addAnimal" element={<AddAnimal />} />

            <Route path="ShayG" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
