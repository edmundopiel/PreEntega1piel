
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, categoryId, nombre, brand, price, img }) => {
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
          <p className="Info">Nombre: ${nombre}</p>
            <p className="Info">Marca: ${brand}</p>
            <p className="Info">Precio: ${price}</p>
          </div>
        </section>
        <footer className="ItemFooter">
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        </footer>
      </article>
    );
  };
  
  export default ItemDetail;

