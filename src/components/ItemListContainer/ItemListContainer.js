import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); // Obtener el parámetro de la URL

  useEffect(() => {
    // Función para cargar los productos según la categoría seleccionada o todos los productos si no hay categoría seleccionada
    const loadProducts = async () => {
      setLoading(true); // Activar el indicador de carga
      try {
        // Obtener los productos según la categoría seleccionada o todos los productos
        const data = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
        setProducts(data); // Actualizar el estado de los productos
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Desactivar el indicador de carga
      }
    };

    loadProducts(); // Llamar a la función para cargar los productos
  }, [categoryId]); // Ejecutar el efecto cuando cambie la categoría seleccionada

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;