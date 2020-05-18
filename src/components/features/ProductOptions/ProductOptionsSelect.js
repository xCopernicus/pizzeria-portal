import React from 'react';

const ProductOptionsSelect = (options) => {

  let optionKeys;
  options ? optionKeys = Object.keys(options) : optionKeys = [];

  return(
    <select>
      {optionKeys.map(option => (
        <option key={option} value={options[option].price}>{options[option].label}, {options[option].price}</option>
      ))}
    </select>
  );
};

export default ProductOptionsSelect;
