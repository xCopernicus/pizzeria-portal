import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const ProductOptionsSelect = ({optionsCallback, options}) => {

  const [state, setState] = useState({price: options[Object.keys(options)[0]].price, options: {[Object.keys(options)[0]]: Object.values(options)[0].label}});

  useEffect(() => {
    optionsCallback(state);
  });

  const changeOptionsChosen = (option) => {
    setState({
      price: options[option].price,
      options: {[option]: options[option].label},
    });
  };

  return(
    <select onChange={event => changeOptionsChosen(event.currentTarget.value)}>
      {Object.keys(options).map(option => (
        <option
          key={option}
          value={option}
        >
          {options[option].label}, {options[option].price}
        </option>
      ))}
    </select>
  );
};

ProductOptionsSelect.propTypes = {
  optionsCallback: PropTypes.func,
  options: PropTypes.object,
};

export default ProductOptionsSelect;
