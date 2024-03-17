import React from 'react';

const NavBar = ({ handleCategoryNavigation }) => {
  return (
    <div className="navbar-container">
      <h1>Zapatillas - valquiria</h1>
      <div className="categories-container">
        <button onClick={() => handleCategoryNavigation('Mujer')}>Mujer</button>
        <button onClick={() => handleCategoryNavigation('Hombre')}>Hombre</button>
        <button onClick={() => handleCategoryNavigation('Niño')}>Niño</button>
      </div>
      <div className="cart-widget-container">

      </div>
    </div>
    
  );
};

export default NavBar;
