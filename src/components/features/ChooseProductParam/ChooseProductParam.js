import React from 'react';

import ChooseProductParamCheckboxes from './ChooseProductParamCheckboxes';
import ChooseProductParamRadios from './ChooseProductParamRadios';
import ChooseProductParamSelect from './ChooseProductParamSelect';

import styles from './ChooseProductParam.module.scss';

const paramType = {
  checkboxes: ChooseProductParamCheckboxes,
  radios: ChooseProductParamRadios,
  select: ChooseProductParamSelect,
};

const ChooseProductParam = ({label, type, options, optionsCallback, optionsChosen}) => {

  const ParamComponent = paramType[type];

  if (!ParamComponent) {
    return null;
  } else {
    return(
      <div className={styles.component}>
        <h4>{label}</h4>
        <ParamComponent label={label} options={options} optionsChosen={optionsChosen} optionsCallback={optionsCallback} />
      </div>
    );
  }
};

export default ChooseProductParam;
