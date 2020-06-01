import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {api} from '../../../settings';

import {Button} from '@material-ui/core';

import DisplayProduct from '../DisplayProduct/DisplayProduct';

import styles from './KitchenOrderSummary.module.scss';

const KitchenOrderSummary = ({id, status, products, fetchOrders, ...other}) => {

  const handleClick = () => {
    Axios
      .put(`${api.url}/${api.order}/${id}`, {
        status: 'ready',
        ...other,
        products,
      })
      .then(() => {
        fetchOrders();
      })
      .catch(err => {
        console.log(err);
      });
  };

  let productKey = 0;
  return(
    <div className={styles.component}>
      <div className={styles.header}>
        <p>{id}</p>
        <p>{status}</p>
        <Button variant='outlined' size='small' color='primary' onClick={handleClick}>Ready</Button>
      </div>
      {products.map(product => {
        productKey++;
        return(
          <DisplayProduct key={productKey} {...product} />
        );
      })}
    </div>
  );
};

KitchenOrderSummary.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  products: PropTypes.array,
  fetchOrders: PropTypes.func,
};

export default KitchenOrderSummary;
