import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Zoo from "./pages/Zoo";
import AddAnimal from "./pages/AddAnimal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route path="zoo" element={<Zoo />} />

          <Route path="addAnimal" element={<AddAnimal />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
