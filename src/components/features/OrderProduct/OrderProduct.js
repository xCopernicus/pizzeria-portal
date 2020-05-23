import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';
import ProductOptions from '../ProductOptions/ProductOptions';

import styles from './OrderProduct.module.scss';

const OrderProduct = ({name, price, params, addProduct}) => {

  const [amount, setAmount] = useState('');

  let paramKeys;
  params ? paramKeys = Object.keys(params) : paramKeys = [];

  let paramsChosen = {};

  let product = {
    id: name,
    amount: amount,
    price: price * amount,
    priceSingle: price,
    params: paramsChosen,
  };

  //console.log(product);



  return(
    <div className={styles.component}>
      <h3>{name}</h3>
      {paramKeys.map(param => {
        const optionsCallback = (dataFromChild) => {
          paramsChosen[param] = {
            label: params[param].label,
            options: dataFromChild,
          };
          console.log(paramsChosen);
        };
        return(
          <ProductOptions key={`${params[param].label} options`} {...params[param]} optionsCallback={optionsCallback} />
        );
      })}
      <input type='number' value={amount} onChange={event => setAmount(event.target.value)} />
      <p>Price: {price}</p>
      <Button variant='outlined' size='small' color='secondary' onClick={() => addProduct(product)}>Add</Button>
    </div>
  );
};

OrderProduct.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  params: PropTypes.object,
  addProduct: PropTypes.func,
};

export default OrderProduct;
