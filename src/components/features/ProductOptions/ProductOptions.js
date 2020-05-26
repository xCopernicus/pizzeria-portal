import React from 'react';

import ProductOptionsCheckboxes from './ProductOptionsCheckboxes';
import ProductOptionsRadios from './ProductOptionsRadios';
import ProductOptionsSelect from './ProductOptionsSelect';

const optionsType = {
  checkboxes: ProductOptionsCheckboxes,
  radios: ProductOptionsRadios,
  select: ProductOptionsSelect,
};

const ProductOptions = ({label, type, options, optionsCallback, optionsChosen}) => {

  const OptionsComponent = optionsType[type];

  if (!OptionsComponent) {
    return null;
  } else {
    return(
      <div>
        <h4>{label}</h4>
        <OptionsComponent label={label} options={options} optionsChosen={optionsChosen} optionsCallback={optionsCallback} />
      </div>
    );
  }
};

export default ProductOptions;
