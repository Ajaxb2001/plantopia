import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlantList from "./components/PlantList";
import Signup from "./components/Signup";
import Login from "./components/Login";
import PlantItem from "./components/PlantItem"; // Corrected import
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<PlantList />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/plant-items" element={<PlantItem />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </Router>
        <ToastContainer />
      </CartProvider>
    </div>
  );
}

export default App;
