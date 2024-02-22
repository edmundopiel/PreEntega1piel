import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

const App = () => {
  const handleAddToCart = (quantity) => {
    console.log(`Adding ${quantity} items to the cart`);
    // Puedes realizar acciones adicionales aquí, como agregar productos al carrito
  };

  return (
    <div className="app-container">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default App;