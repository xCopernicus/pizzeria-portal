import React from 'react';
import PropTypes from 'prop-types';

const ChooseProductParamRadios = ({optionsCallback, label, options, optionsChosen}) => {

  return(
    <div>
      {Object.keys(options).map(option => (
        <label key={option}>
          <input
            type='radio'
            checked={Object.keys(optionsChosen).includes(option)}
            name={label}
            onChange={() => optionsCallback({[option]: options[option].label})}
          />
          {options[option].label}, {options[option].price}
        </label>
      ))}
    </div>
  );
};

ChooseProductParamRadios.propTypes = {
  optionsCallback: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.object,
  optionsChosen: PropTypes.object,
};

export default ChooseProductParamRadios;
