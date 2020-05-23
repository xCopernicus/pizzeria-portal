import React from 'react';
import PropTypes from 'prop-types';

const ProductOptionsRadios = ({optionsCallback, ...options}) => {


  return(
    <div>
      {Object.keys(options).map(option => {

        let optionsChosen = {[option]: options[option].label};
        optionsCallback(optionsChosen);

        const changeOptionsChosen = (optionKey, value) => {
          optionsChosen = {[optionKey]: value};
          optionsCallback(optionsChosen);
        };

        return(
          <label key={option}>
            <input
              type='radio'
              name='radio'
              value={option}
              onChange={() => changeOptionsChosen(option, options[option].label)}
            />
            {options[option].label}, {options[option].price}
          </label>
        );
      })}
    </div>
  );
};

ProductOptionsRadios.propTypes = {
  optionsCallback: PropTypes.func,
};

export default ProductOptionsRadios;
