import React, { useState, useEffect } from 'react';
import shoeProducts from './asyncMock';
import ItemCount from './ItemCount';
import '../styles.css';

const Item = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} ${product.name} to the cart`);

  };

  return (
    <li key={product.id}>
      <img
        src={product.img}
        alt={product.name}
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <strong>{product.name}</strong> - {product.brand} - ${product.price}
      <ItemCount stock={10} initial={1} onAdd={(qty) => setQuantity(qty)} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
};

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(shoeProducts);
        }, 1000); // Simulamos una carga asíncrona de 1 segundo
      });
    };

    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Catalogo de Zapatillas</h2>
      <ul>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;