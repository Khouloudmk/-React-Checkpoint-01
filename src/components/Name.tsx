import React from 'react';
import product from '../product';

const Name: React.FC = () => {
  return <h3 className="product-name">{product.name}</h3>;
};

export default Name;
