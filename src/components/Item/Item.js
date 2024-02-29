import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, categoryId, nombre, brand, price, img, stock }) => {
  return (
    <article className="Carditem">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <section className="ItemContent">
        <div className="ItemImage">
          <img src={img} alt={nombre} style={{ width: '4cm', height: '3cm', objectFit: 'cover' }} />
        </div>
        <div className="ItemInfo">
          <p className="Info">Precio: ${price}</p>
          <p className="Info">Stock Disponible: {stock}</p>
        </div>
      </section>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className='Option'>Ver Detalle</Link>
      </footer>
    </article>
  );
};
export default Item