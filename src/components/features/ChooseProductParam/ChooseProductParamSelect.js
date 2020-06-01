import React from 'react';
import PropTypes from 'prop-types';

import {Select, MenuItem} from '@material-ui/core';

import styles from './ChooseProductParam.module.scss';

const ChooseProductParamSelect = ({optionsCallback, options, optionsChosen}) => {

  const changeOptionsChosen = option => {
    optionsCallback({[option]: options[option].label});
  };

  return(
    <Select
      value={Object.keys(optionsChosen)[0]}
      onChange={e => changeOptionsChosen(e.target.value)}
      inputProps={{ 'aria-label': 'Without label' }}
      className={styles.select}
      color='secondary'
    >
      {Object.keys(options).map(option => (
        <MenuItem
          key={option}
          value={option}
        >
          {options[option].label}, ${options[option].price}
        </MenuItem>
      ))}
    </Select>
  );
};

ChooseProductParamSelect.propTypes = {
  optionsCallback: PropTypes.func,
  options: PropTypes.object,
  optionsChosen: PropTypes.object,
};

export default ChooseProductParamSelect;
