import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';
import CartItem from '../components/CartItem';



const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);


  
  // Función para calcular el total de la compra
  const totalCompra = () => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  // Si el carrito está vacío, mostrar un mensaje y un enlace para volver a la página de productos
  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className="option">Productos</Link> {/* 'option' en minúsculas */}
      </div>
    );
  }

  // Si hay items en el carrito, mostrar los ítems del carrito, total y botón para vaciar el carrito
  return (
    <div>
      {cart.map(item => <CartItem key={item.id} {...item} />)} {/* Renombrado 'p' a 'item' para mayor claridad */}
      <p>Total a pagar: ${totalCompra()}</p> {/* Invocar la función totalCompra para mostrar el total */}
      <button onClick={clearCart} className='Button'>Vaciar Carrito</button> {/* Llamada a la función clearCart sin arrow function */}
      <Link to="/checkout" className="option">Checkout</Link> {/* 'option' en minúsculas */}
    </div>
  );
}

export default Cart;