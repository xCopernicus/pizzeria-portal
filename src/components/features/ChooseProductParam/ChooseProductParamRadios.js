import React from 'react';
import PropTypes from 'prop-types';

import {Radio, RadioGroup, FormControlLabel} from '@material-ui/core';

const ChooseProductParamRadios = ({optionsCallback, label, options, optionsChosen}) => {

  const changeOptionsChosen = option => {
    optionsCallback({[option]: options[option].label});
  };

  return(
    <RadioGroup
      name={label}
      value={Object.keys(optionsChosen)[0]}
      onChange={(e) => changeOptionsChosen(e.target.value)}
    >
      {Object.keys(options).map(option => (
        <FormControlLabel
          key={option}
          color='primary'
          value={option}
          control={<Radio color='secondary' />}
          label={`${options[option].label}, $${options[option].price}`}
        />
      ))}
    </RadioGroup>
  );
};

ChooseProductParamRadios.propTypes = {
  optionsCallback: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.object,
  optionsChosen: PropTypes.object,
};

export default ChooseProductParamRadios;
