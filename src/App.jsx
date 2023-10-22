import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Navbar from "./Pages/Common/Navbar";
import Footer from "./Pages/Common/Footer";
import Medicines from "./Pages/Medicines";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Surgeries from "./Pages/Surgeries";
import LabTest from "./Pages/LabTest";
import Doctor from "./Pages/Doctor";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/medi"} element={<Medicines />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/surgerie"} element={<Surgeries />} />
        <Route path={"/labtest"} element={<LabTest />} />
        <Route path={"/doctor"} element={<Doctor />} />
        <Route path={"/profile/:id"} element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
