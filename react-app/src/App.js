import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
