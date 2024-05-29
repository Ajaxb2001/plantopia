import React, { useState, useEffect } from "react";
import PlantItem from "./PlantItem";
import "../CSS/PlantList.css"
const PlantList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json") // Replace with your actual backend endpoint
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantItem key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
