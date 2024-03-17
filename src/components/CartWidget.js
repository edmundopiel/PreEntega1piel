import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { CartContext } from './CartContext'; // Importa el contexto del carrito
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext); // Obtén el total de la cantidad de elementos en el carrito del contexto

  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      <Link to="/cart" className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        <img className='CartImg' src="ruta_de_la_imagen_del_carrito" alt="cart-widget" /> {/* Reemplaza "ruta_de_la_imagen_del_carrito" con la ruta de tu imagen del carrito */}
        <span>{totalQuantity}</span> {/* Muestra el total de la cantidad de elementos en el carrito */}
      </Link>
    </div>
  );
};

export default CartWidget;