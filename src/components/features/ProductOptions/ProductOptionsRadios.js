import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const ProductOptionsRadios = ({optionsCallback, label, options}) => {

  const [state, setState] = useState({price: options[Object.keys(options)[0]].price, options: {[Object.keys(options)[0]]: Object.values(options)[0].label}});

  useEffect(() => {
    optionsCallback(state);
  });

  const changeOptionsChosen = (option, value) => {
    setState({
      price: options[option].price,
      options: {[option]: value},
    });
  };

  return(
    <div>
      {Object.keys(options).map(option => (
        <label key={option}>
          <input
            type='radio'
            name={label}
            checked={Object.keys(state.options).includes(option)}
            onChange={() => changeOptionsChosen(option, options[option].label)}
          />
          {options[option].label}, {options[option].price}
        </label>
      ))}
    </div>
  );
};

ProductOptionsRadios.propTypes = {
  optionsCallback: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.object,
};

export default ProductOptionsRadios;
