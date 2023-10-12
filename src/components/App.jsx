// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Favorite from "../pages/favoritePage/FavoritePage";
import MainPage from "../pages/mainPage/mainPage";
import Cars from "../pages/Cars/Cars";
import SharedLayout from "./SharedLayout/SharedLayout";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/cars" element={<Cars />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;