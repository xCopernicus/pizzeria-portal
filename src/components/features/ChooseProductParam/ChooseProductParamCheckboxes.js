import React from 'react';
import PropTypes from 'prop-types';

Object.filter = (obj, keyToDelete) => {
  let result = {};
  const keys = Object.keys(obj).filter(key => key !== keyToDelete);
  for (let key of keys){
    result[key] = obj[key];
  }
  return result;
};

const ChooseProductParamCheckboxes = ({optionsCallback, options, optionsChosen}) => {

  const changeOptionsChosen = (option, checked) => {
    optionsCallback(checked ? {...optionsChosen, [option]: options[option].label} : Object.filter(optionsChosen, option));
  };

  return(
    <div>
      {Object.keys(options).map(option => (
        <label key={option}>
          <input
            type='checkbox'
            checked={Object.keys(optionsChosen).includes(option)}
            onChange={event => changeOptionsChosen(option, event.currentTarget.checked)}
          />
          {options[option].label}, {options[option].price}
        </label>
      ))}
    </div>
  );
};

ChooseProductParamCheckboxes.propTypes = {
  optionsCallback: PropTypes.func,
  options: PropTypes.object,
  optionsChosen: PropTypes.object,
};

export default ChooseProductParamCheckboxes;
