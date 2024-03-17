import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={decrement} disabled={quantity <= 1}>
          -
        </button>
        <h4 className="number">Cantidad: {quantity}</h4>
        <button className="Button" onClick={increment} disabled={quantity >= stock}>
          +
        </button>
      </div>

      <div>
        <button className="Button" onClick={() => onAdd(quantity)} disabled={stock <= 0}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;