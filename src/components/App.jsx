// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Favorite from "./favoritePage/favoritePage";
import MainPage from "./mainPage/mainPage";
import CarsCard from "./carsCard/carsCard";
import SharedLayout from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />}></Route>
        <Route path="/cars" element={<CarsCard />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Route>
    </Routes>
  );
}

export default App;