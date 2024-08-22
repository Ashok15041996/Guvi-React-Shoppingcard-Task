import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { title: 'Fancy Product', price: '40.00 - $80.00', rating: null, isOnSale: false },
  { title: 'Special Item', price: '20.00', salePrice: '18.00', rating: 5, isOnSale: true },
  { title: 'Sale Item', price: '50.00', salePrice: '25.00', rating: null, isOnSale: true },
  { title: 'Popular Item', price: '40.00', rating: 5, isOnSale: false },
  { title: 'Sale Item', price: '40.00 - $80.00', rating: null, isOnSale: false },
  { title: 'Fancy Product', price: '40.00 - $80.00', rating: null, isOnSale: false },
  { title: 'Special Item', price: '20.00', salePrice: '18.00', rating: 5, isOnSale: true },
  { title: 'Popular Item', price: '40.00', rating: 5, isOnSale: false },
];

const ProductGrid = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;