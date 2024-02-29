import React from 'react';
import CartWidget from '../CartWidget';



const NavBar = () => {
    return (
      <div className="navbar-container">
        <h1>Zapatillas - valquiria</h1>

        <div className="categories-container">
          <button>Mujer</button>
          <button>Hombre</button>
          <button>Niño</button>
        </div>
        <div className="cart-widget-container">
          <CartWidget />
        </div>
      </div>
      
    );
  };
  
  export default NavBar;

