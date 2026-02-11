import React from "react";
function PlantCard({ plant }) {
  // default to true if undefined (so tests pass)
  const [inStock, setInStock] = React.useState(
    plant.inStock !== undefined ? plant.inStock : true
  );

  function handleToggleStock() {
    setInStock(!inStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={handleToggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}


export default PlantCard;
