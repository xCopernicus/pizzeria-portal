import React from 'react';

import ChooseProductParamCheckboxes from './ChooseProductParamCheckboxes';
import ChooseProductParamRadios from './ChooseProductParamRadios';
import ChooseProductParamSelect from './ChooseProductParamSelect';

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
      <div>
        <h4>{label}</h4>
        <ParamComponent label={label} options={options} optionsChosen={optionsChosen} optionsCallback={optionsCallback} />
      </div>
    );
  }
};

export default ChooseProductParam;
