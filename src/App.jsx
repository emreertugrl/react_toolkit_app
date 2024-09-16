import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
