import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Login";
import AddHotel from "./pages/AddHotel";
import UpdateHotel from "./pages/UpdateHotel";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<AddHotel />} />
      <Route path="/update" element={<UpdateHotel />} />
    </Routes>
  );
}

export default App;
