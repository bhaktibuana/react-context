import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/style/global.scss";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
