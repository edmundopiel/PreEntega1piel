const products = [
  { 
    id: 1, 
    categoryId: 'deporte', 
    nombre: 'Zapatillas Deportivas A', 
    brand: 'Nike', 
    price: 120, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_746129-MLA70303935102_072023-F.webp' 
  },
  { 
    id: 2, 
    categoryId: 'casual', 
    nombre: 'Zapatillas Casuales B', 
    brand: 'Adidas', 
    price: 90, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_750707-MLA42394012708_062020-F.webp' 
  },
  { 
    id: 48, 
    categoryId: 'moda', 
    nombre: 'Zapatillas de Moda X', 
    brand: 'Puma', 
    price: 80, 
    img: 'https://briganti.com.ar/cdn/shop/products/MCZP05290081-01_1000x.jpg?v=1615301420' 
  },
  { 
    id: 49, 
    categoryId: 'futbol', 
    nombre: 'Zapatillas Deportivas Y', 
    brand: 'Reebok', 
    price: 110, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_746129-MLA70303935102_072023-F.webp' 
  },
  { 
    id: 50, 
    categoryId: 'running', 
    nombre: 'Zapatillas Running Z', 
    brand: 'Under Armour', 
    price: 95, 
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_606926-MLA45393077362_032021-F.webp' 
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
      resolve(products.find(prod=> prod.id===productId))
    }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(categoryId))
    }, 500)
  })
}


