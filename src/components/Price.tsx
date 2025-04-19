import React from 'react';
import product from '../product';

const Price: React.FC = () => {
  return <h4 className="text-danger">{product.price}</h4>;
};

export default Price;
