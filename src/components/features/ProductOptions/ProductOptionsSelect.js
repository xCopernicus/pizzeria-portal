import React from 'react';
import PropTypes from 'prop-types';

const ProductOptionsSelect = ({optionsCallback, options}) => {

  const changeOptionsChosen = (option) => {
    optionsCallback({[option]: options[option].label});
  };

  return(
    <select onChange={event => changeOptionsChosen(event.currentTarget.value)}>
      {Object.keys(options).map(option => (
        <option key={option} value={option}>
          {options[option].label}, {options[option].price}
        </option>
      ))}
    </select>
  );
};

ProductOptionsSelect.propTypes = {
  optionsCallback: PropTypes.func,
  options: PropTypes.object,
};

export default ProductOptionsSelect;
