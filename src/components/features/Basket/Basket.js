import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';

import BasketItem from '../../features/BasketItem/BasketItem';

import styles from './Basket.module.scss';

const Basket = ({basket, totalPrice, deleteProduct, sendOrder}) => {
  let itemKey = 0;

  const [items, setItems] = useState(false);
  return(
    <div className={`${styles.component} ${items ? styles.active : ''}`}>
      {basket.length ? (
        <div className={styles.header} onClick={() => setItems(items ? false : true)}>
          <div className={styles.header_title}>
            <h3>Basket</h3>
            <FontAwesomeIcon className={styles.icon} icon={faSortDown} />
          </div>
          <div className={styles.summary}>
            <p>Total Price: ${totalPrice}</p>
            <p>Items: {basket.length}</p>
            <Button variant='outlined' size='small' color='primary' onClick={sendOrder}>Order</Button>
          </div>
        </div>
      ) : (
        <div className={`${styles.header} ${styles.default}`}>
          <div className={styles.header_title}>
            <h3>Basket</h3>
          </div>
          <div className={styles.summary}>
            <p>Total Price: ${totalPrice}</p>
            <p>Items: {basket.length}</p>
            <Button variant='outlined' size='small' color='primary' onClick={sendOrder}>Order</Button>
          </div>
        </div>
      )}
      {basket.length ? (
        <div className={styles.basket}>
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
        </div>
      ) : (
        ''
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
