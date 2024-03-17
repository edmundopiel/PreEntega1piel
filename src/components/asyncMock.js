const products = [
  { 
    id: 1, 
    category: 'Niño', 
    name: 'Zapatillas Deportivas A', 
    brand: 'Nike', 
    price: 120, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_746129-MLA70303935102_072023-F.webp' ,
    stock: 30
  },
  { 
    id: 2, 
    category: 'Hombre', 
    name: 'Zapatillas Casuales B', 
    brand: 'Adidas', 
    price: 90, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_750707-MLA42394012708_062020-F.webp' ,
    stock: 30
  },
  { 
    id: 48, 
    category: 'Mujer', 
    name: 'Zapatillas de Moda X', 
    brand: 'Puma', 
    price: 80, 
    img: 'https://briganti.com.ar/cdn/shop/products/MCZP05290081-01_1000x.jpg?v=1615301420' ,
    stock: 30
  },
  { 
    id: 49, 
    category: 'Niño', 
    name: 'Zapatillas Deportivas Y', 
    brand: 'Reebok', 
    price: 110, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_746129-MLA70303935102_072023-F.webp' ,
    stock: 30
  },
  { 
    id: 50, 
    category: 'Mujer', 
    name: 'Zapatillas Running Z', 
    brand: 'Under Armour', 
    price: 95, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_606926-MLA45393077362_032021-F.webp' ,
    stock: 30
  },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}


export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod=> prod.id===parseInt(productId)))
    }, 500)
  })
}


export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(prod => prod.category === categoryId));
    }, 500);
  });
};
