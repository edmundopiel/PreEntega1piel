import React from 'react';
import CartWidget from './CartWidget';



const NavBar = () => {
    return (
      <div className="navbar-container">
        <h1>Zapatillas - valquiria</h1>

        <div className="categories-container">
          <span>Mujer</span>
          <span>Hombre</span>
          <span>Niño</span>
        </div>
        <div className="cart-widget-container">
          <CartWidget />
        </div>
      </div>
      
    );
  };
  
  export default NavBar;