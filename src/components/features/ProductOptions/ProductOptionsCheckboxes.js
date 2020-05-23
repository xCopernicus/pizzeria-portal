import React from 'react';
import PropTypes from 'prop-types';

const ProductOptionsCheckboxes = ({optionsCallback, ...options}) => {

  let optionsChosen = {};

  return(
    <div>
      {Object.keys(options).map(option => {

        const changeOptionsChosen = (optionKey, value, checked) => {
          if (checked) {
            optionsChosen[optionKey] = value;
          } else if (!checked) {
            delete optionsChosen[optionKey];
          }
          optionsCallback(optionsChosen);
        };

        return(
          <label key={option}>
            <input
              type='checkbox'
              value={options[option].label}
              onChange={event => changeOptionsChosen(option, options[option].label, event.currentTarget.checked)}
            />
            {options[option].label}, {options[option].price}
          </label>
        );
      })}
    </div>
  );
};

ProductOptionsCheckboxes.propTypes = {
  optionsCallback: PropTypes.func,
};

export default ProductOptionsCheckboxes;
