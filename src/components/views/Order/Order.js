import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Container} from '@material-ui/core';

import DisplayProduct from '../../features/DisplayProduct/DisplayProduct';

import styles from './Order.module.scss';

const Order = ({loading: {active, error}, fetchOrders, order}) => {



  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrders();
  }, [fetchOrders]);

  if (error) {
    return(
      <Container maxWidth='md'>
        <div className={styles.component}>
          Error!
        </div>
      </Container>
    );
  } else if (!order || active) {
    return(
      <Container maxWidth='md'>
        <div className={styles.component}>
          Loading...
        </div>
      </Container>
    );
  } else {
    let productKey = 0;
    return(
      <Container maxWidth='md'>
        <div className={styles.component}>
          <p>Status: {order.status}</p>
          <p>Type: {order.type}</p>
          <p>Price: {order.price}</p>
          <p>Products:</p>
          {order.products.map(product => {
            productKey++;
            return(
              <DisplayProduct key={productKey} {...product} />
            );
          })}
        </div>
      </Container>
    );
  }



};

Order.propTypes = {
  fetchOrders: PropTypes.func,
  match: PropTypes.object,
  order: PropTypes.object,
};

export default Order;
