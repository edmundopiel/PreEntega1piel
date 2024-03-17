import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductsById } from '../asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then(response => {
        setProduct(response);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Set loading to false in case of error
      });
  }, [itemId]); // Add itemId as a dependency for useEffect to fetch data for each itemId change

  // Show loading indicator or ItemDetail component based on loading state
  return (
    <div className='ItemDetailContainer'>
      {loading ? <p>Loading...</p> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;