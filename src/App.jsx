import { useEffect } from "react";
import NavBar from "./utilities/NavBar/NavBar";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Footer from "./utilities/Footer/Footer";
import RadioPage from "./pages/radio/RadioPage";
import "./App.css";
import TvLive from "./pages/tv/TvLive";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/tv-live" element={<TvLive />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
