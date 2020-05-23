import React from 'react';

import ProductOptionsCheckboxes from './ProductOptionsCheckboxes';
import ProductOptionsRadios from './ProductOptionsRadios';
import ProductOptionsSelect from './ProductOptionsSelect';

const optionsType = {
  checkboxes: ProductOptionsCheckboxes,
  radios: ProductOptionsRadios,
  select: ProductOptionsSelect,
};

const ProductOptions = ({label, type, options, optionsCallback}) => {

  const OptionsComponent = optionsType[type];

  if (!OptionsComponent) {
    return null;
  } else {
    return(
      <div>
        <h4>{label}</h4>
        <OptionsComponent {...options} optionsCallback={optionsCallback} />
      </div>
    );
  }
};

export default ProductOptions;
