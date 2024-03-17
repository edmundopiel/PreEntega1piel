import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; // Importa CartProvider directamente

const App = () => {
  const handleCategoryNavigation = (category) => {
    // Aquí puedes implementar la navegación a la categoría seleccionada
    console.log('Navegando a la categoría:', category);
  };

  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar handleCategoryNavigation={handleCategoryNavigation} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
};

export default App;