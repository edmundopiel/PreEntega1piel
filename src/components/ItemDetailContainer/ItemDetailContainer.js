import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail' // Assuming you have an ItemDetail component
import { getProductsById } from '../asyncMock'

    import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product , setProducts] = useState(null);

    const {itemId}=useParams()
  
    useEffect(() => {

        getProductsById(itemId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
                console.error(error)
            })

        }, [])
  
    return (
      <div classname= 'ItemDetailContainer'>
        <ItemDetail {...product}/>
      </div>
    )
  }
  
  export default ItemDetailContainer