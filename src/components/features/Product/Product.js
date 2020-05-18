import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';

import {Button} from '@material-ui/core';
import ProductOptions from '../ProductOptions/ProductOptions';

const sendOrder = () => {
  console.log('sendOrder');
};

const Product = ({name, price, params}) => {

  let paramKeys;
  params ? paramKeys = Object.keys(params) : paramKeys = [];

  return(
    <div className={styles.component}>
      <h3>{name}</h3>
      {paramKeys.map(param => (
        <ProductOptions key={`${params[param].label} options`} {...params[param]} />
      ))}
      <input type='number' />
      <p>Price: {price}</p>
      <Button variant='outlined' size='small' color='secondary' onClick={sendOrder}>Order</Button>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  params: PropTypes.object,
};

export default Product;
