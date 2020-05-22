import React from 'react';

const ProductOptionsSelect = (options) => (
  <select>
    {Object.keys(options).map(option => (
      <option key={option} value={options[option].price}>{options[option].label}, {options[option].price}</option>
    ))}
  </select>
);

export default ProductOptionsSelect;
