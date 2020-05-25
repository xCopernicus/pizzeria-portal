import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';
import ProductOptions from '../ProductOptions/ProductOptions';

import styles from './OrderProduct.module.scss';

const OrderProduct = ({name, id, price, params, addProduct}) => {

  const [state, setState] = useState(1);
  let paramKeys;
  params ? paramKeys = Object.keys(params) : paramKeys = [];
  let product = {
    id: name,
    priceSingle: price,
    price: state * price,
    amount: state,
  };
  let priceSingle = {};

  return(
    <div className={styles.component}>
      <h3>{name}, {price}</h3>
      {paramKeys.map(param => {
        const optionsCallback = (dataFromChild) => {
          product = {
            id: id,
            priceSingle: price,
            amount: state,
            params: {
              ...product.params,
              [param]: {
                label: params[param].label,
                options: dataFromChild.options,
              },
            },
          };
          priceSingle[param] = dataFromChild.price;
          Object.keys(product.params).forEach(param => {
            product.priceSingle += priceSingle[param];
            product.price = state * product.priceSingle;
          });
        };
        // [TO DO] change state for price to change
        return(
          <ProductOptions key={`${params[param].label} options`} {...params[param]} optionsCallback={optionsCallback} />
        );
      })}
      <input type='number' value={state} onChange={event => setState(parseInt(event.target.value))} />
      <p>Price: {price}</p>
      <Button variant='outlined' size='small' color='secondary' onClick={() => addProduct(product)}>Add</Button>
    </div>
  );
};

OrderProduct.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  params: PropTypes.object,
  addProduct: PropTypes.func,
};

export default OrderProduct;
