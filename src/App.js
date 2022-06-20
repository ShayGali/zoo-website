import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import ZooShareLayout from "./components/ZooShareLayout";
import Zoo from "./pages/Zoo";
import AnimalDetails from "./pages/AnimalDetails";
import AddAnimal from "./pages/AddAnimal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="zoo" element={<ZooShareLayout />}>
            <Route index element={<Zoo />} />
            <Route path=":animalId" element={<AnimalDetails />} />
          </Route>

          <Route path="addAnimal" element={<AddAnimal />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
