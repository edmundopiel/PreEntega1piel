import React from 'react';

const CartItem = ({ id, name, price, quantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{name}</h3>
        <p>Precio: ${price}</p> {/* Cambiado "Price" a "Precio" para mantener la consistencia */}
        <p>Cantidad: {quantity}</p>
      </div>
      <button onClick={() => onRemove(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;