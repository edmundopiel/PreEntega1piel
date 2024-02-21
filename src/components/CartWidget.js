import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      <span>5</span> {/* Número fijo*/}
    </div>
  );
};

export default CartWidget;