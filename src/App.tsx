import React from "react";
import ClushLayout from "./layouts/ClushLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpContainer from "./containers/SignUpContainer";

const App: React.FC = () => {
  return (
    <ClushLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUpContainer />} />
      </Routes>
    </ClushLayout>
  );
};

export default App;
