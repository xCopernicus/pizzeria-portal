import React from 'react';
import PropTypes from 'prop-types';

import {Checkbox, FormControlLabel} from '@material-ui/core';

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
    <>
      {Object.keys(options).map(option => (
        <FormControlLabel
          key={option}
          control={
            <Checkbox
              checked={Object.keys(optionsChosen).includes(option)}
              onChange={event => changeOptionsChosen(option, event.currentTarget.checked)}
              color='secondary'
            />
          }
          label={`${options[option].label}, $${options[option].price}`}
        />
      ))}
    </>
  );
};

ChooseProductParamCheckboxes.propTypes = {
  optionsCallback: PropTypes.func,
  options: PropTypes.object,
  optionsChosen: PropTypes.object,
};

export default ChooseProductParamCheckboxes;
