import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext';

const ItemDetail = ({ id, category, name, brand, price, img, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price };
    addItem(item, quantity);
  };

  return (
    <article className="Carditem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <section className="ItemContent">
        <div className="ItemImage">
          <img src={img} alt={name} style={{ width: '4cm', height: '3cm', objectFit: 'cover' }} />
        </div>
        <div className="ItemInfo">
          <p className="Info">Nombre: {name}</p>
          <p className="Info">Marca: {brand}</p>
          <p className="Info">Precio: ${price}</p>
        </div>
      </section>
      <footer className='ItemFooter'>
        {quantityAdded > 0 ? (
          <Link to='/cart' className='Option'>Terminar compra</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;

