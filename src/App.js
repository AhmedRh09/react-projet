import React from "react";
import "./styles.css";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import WeatherStore from "./redux/Store";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
const App = () => {
  return (
    <Provider store={WeatherStore}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
