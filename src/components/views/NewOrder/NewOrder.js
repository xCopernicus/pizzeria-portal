import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import {Container, Button} from '@material-ui/core';

import Product from '../../features/OrderProduct/OrderProductContainer';

import {api} from '../../../settings.js';

import styles from './NewOrder.module.scss';

const NewOrder = ({ loading: { active, error }, products, fetchProducts, match }) => {

  useEffect(() => (
    fetchProducts()
  ), [fetchProducts]);

  const sendOrder = () => {
    Axios
      .post(`${api.url}/${api.order}`, {
        status: 'ordered',
        type: 'local',
        tableNo: match.params.id,
        totalPrice: 'totalPrice',
        totalNumber: 'totalNumber',
        products: '[products]',
      })
      .then((res) => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if(active || !products.length){
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>New Order for Table {match.params.id}</h2>
        <p>Loading...</p>
      </Container>
    );
  } else if(error) {
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>New Order for Table {match.params.id}</h2>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Container>
    );
  } else {
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>New Order for Table {match.params.id}</h2>
        <div className={styles.basket}>
          <h3>Basket</h3>
          <Button variant='outlined' size='small' color='secondary' onClick={sendOrder}>Order</Button>
        </div>
        <div className={styles.products}>
          {products.map((product) => (
            <Product key={product.id} {...product}/>
          ))}
        </div>
      </Container>
    );
  }
};

NewOrder.propTypes = {
  fetchProducts: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
};


export default NewOrder;
