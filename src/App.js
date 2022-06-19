import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import ZooShareLayout from "./pages/ZooShareLayout";
import Zoo from "./pages/Zoo";
import AnimalCard from "./pages/AnimalCard";
import AddAnimal from "./pages/AddAnimal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="zoo" element={<ZooShareLayout />}>
            <Route index element={<Zoo />} />
            <Route path=":animalId" element={<AnimalCard />} />
          </Route>

          <Route path="addAnimal" element={<AddAnimal />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
