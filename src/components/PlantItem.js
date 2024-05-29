import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import "../CSS/PlantIteam.css";

const PlantItem = ({ plant }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(plant);
    toast.success("Item added successfully!");
  };

  return (
    <div className="plant-item-container">
      <div className="plant-item">
        <h2 className="plant-item-name">{plant.name}</h2>
        <img className="plant-item-image" src={plant.image} alt={plant.name} />
        <p className="plant-item-price">Price: ₹{plant.price}</p>
        <button className="plant-item-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantItem;
