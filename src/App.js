import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Download from "./pages/download/Download";
import UserLogin from "./pages/login/UserLogin";
import UserRegist from "./pages/Registration/UserRegist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="download" element={<Download />} />
        </Route>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/reg" element={<UserRegist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
