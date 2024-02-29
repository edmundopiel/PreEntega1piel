import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router> {/* Use Router instead of BrowserRouter */}
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <ItemCount
          initial={1}
          stock={10}
          onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
        />
      </Router>
    </div>
  );
}

export default App;

