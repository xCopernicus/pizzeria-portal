import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './NewOrder.module.scss';

import {Container, Button} from '@material-ui/core';

import Product from '../../features/OrderProduct/OrderProduct';

const NewOrder = ({ loading: { active, error }, products, fetchProducts, match }) => {

  useEffect(() => (
    fetchProducts()
  ), [fetchProducts]);

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
          <Button variant='outlined' size='small' color='secondary'>Order</Button>
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
