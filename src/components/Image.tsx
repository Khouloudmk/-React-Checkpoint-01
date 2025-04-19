import React from 'react';
import product from '../product';

const Image: React.FC = () => (
  <img
    src={product.image}
    alt={product.name}
    className="card-img-top"
  />
);

export default Image;
