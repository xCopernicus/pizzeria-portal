import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import {api} from '../../../settings';

import {Button} from '@material-ui/core';

import ProductParams from '../ProductParams/ProductParams';

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
      <Button variant='outlined' size='small' color='secondary' onClick={handleClick}>Ready</Button>
      <p>Status: {status}</p>
      <p>Products:</p>
      {products.map(product => {
        productKey++;
        return(
          <div className={styles.product} key={productKey}>
            <p>Name: {product.id}</p>
            <p>Amout: {product.amount}</p>
            <p>Params: </p>
            <ProductParams {...product} />
          </div>
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
