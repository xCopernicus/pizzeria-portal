import React from 'react';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';

import BasketItem from '../../features/BasketItem/BasketItem';

import styles from './Basket.module.scss';

const Basket = ({basket, totalPrice, deleteProduct, sendOrder}) => {
  let itemKey = 0;
  return(
    <div className={styles.component}>
      <h3>Basket</h3>
      {basket.length ? (
        <>
          <div className={styles.info}>
            <p>Name</p>
            <p>Price</p>
            <p>Amount</p>
            <p>Action</p>
          </div>
          <div className={styles.items}>
            {basket.map(item => {
              itemKey++;
              return(
                <BasketItem key={itemKey} index={itemKey - 1} {...item} deleteProduct={deleteProduct} />
              );
            })}
          </div>
          <p>Total Price: {totalPrice}</p>
          <Button variant='outlined' size='small' color='primary' onClick={sendOrder}>Order</Button>
        </>
      ) : (
        <div className={styles.info}>
          <p>Empty</p>
        </div>
      )}
    </div>
  );
};

Basket.propTypes = {
  basket: PropTypes.array,
  totalPrice: PropTypes.number,
  deleteProduct: PropTypes.func,
  sendOrder: PropTypes.func,
};

export default Basket;
