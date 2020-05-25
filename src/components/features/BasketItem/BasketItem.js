import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';

import styles from './BasketItem.module.scss';

const BasketItem = ({id, price, amount, deleteProduct, index}) => (
  <div className={styles.component}>
    <p>{id}</p>
    <p>{price}</p>
    <p>{amount}</p>
    <p>{index}</p>
    <Button variant='outlined' size='small' color='secondary' onClick={() => {
      console.log(index);
      deleteProduct(index);
    }}>Delete</Button>
  </div>

);

BasketItem.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
  deleteProduct: PropTypes.func,
  index: PropTypes.number,
};

export default BasketItem;
