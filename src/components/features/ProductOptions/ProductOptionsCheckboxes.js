import React from 'react'

const ProductOptionsCheckboxes = (options) => {

  let optionKeys
  options ? optionKeys = Object.keys(options) : optionKeys = []

  return(
    <div>
      {optionKeys.map(option => (
        <label key={option}>
          <input
            type='checkbox'
            value={options[option].price}
            />
          {options[option].label}, {options[option].price}
        </label>
      ))}
    </div>
  )}

export default ProductOptionsCheckboxes;
