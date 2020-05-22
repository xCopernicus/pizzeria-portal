import React from 'react';

const ProductOptionsCheckboxes = (options) => (
  <div>
    {Object.keys(options).map(option => (
      <label key={option}>
        <input
          type='checkbox'
          value={options[option].price}
        />
        {options[option].label}, {options[option].price}
      </label>
    ))}
  </div>
);

export default ProductOptionsCheckboxes;
