import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

Object.filter = (obj, keyToDelete) => {
  let result = {};
  const keys = Object.keys(obj).filter(key => key !== keyToDelete);
  for (let key of keys){
    result[key] = obj[key];
  }
  return result;
};

const ProductOptionsCheckboxes = ({optionsCallback, options}) => {

  let defaultOptions = {};
  let defaultPrice = 0;
  Object.keys(options).filter(option => options[option].default === true).forEach(option => {
    defaultOptions[option] = options[option].label;
    defaultPrice += options[option].price;
  });

  const [state, setState] = useState({price: defaultPrice, options: defaultOptions});

  useEffect(() => {
    optionsCallback(state);
  });

  const changeOptionsChosen = (option, value, checked) => {
    if (checked){
      setState({
        price: state.price + options[option].price,
        options: {
          ...state.options,
          [option]: value,
        },
      });
    } else if (!checked){
      setState({
        price: state.price - options[option].price,
        options: Object.filter(state.options, option),
      });
    }
  };

  return(
    <div>
      {Object.keys(options).map(option => (
        <label key={option}>
          <input
            type='checkbox'
            checked={Object.keys(state.options).includes(option)}
            onChange={event => changeOptionsChosen(option, options[option].label, event.currentTarget.checked)}
          />
          {options[option].label}, {options[option].price}
        </label>
      ))}
    </div>
  );
};

ProductOptionsCheckboxes.propTypes = {
  optionsCallback: PropTypes.func,
  options: PropTypes.object,
};

export default ProductOptionsCheckboxes;
