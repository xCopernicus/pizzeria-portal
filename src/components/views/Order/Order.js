import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Container} from '@material-ui/core';

import KitchenOrderSummary from '../../features/KitchenOrderSummary/KitchenOrderSummary';

import styles from './Order.module.scss';

const Order = ({loading: {active, error}, fetchOrders, order}) => {



  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrders();
  }, [fetchOrders]);

  if (error) {
    return(
      <div className={styles.component}>
        <Container maxWidth='md'>
          Error!
        </Container>
      </div>
    );
  } else if (!order || active) {
    return(
      <div className={styles.component}>
        <Container maxWidth='md'>
          Loading...
        </Container>
      </div>
    );
  } else {
    return(
      <div className={styles.component}>
        <Container maxWidth='md'>

          <KitchenOrderSummary {...order} />
        </Container>
      </div>
    );
  }



};

Order.propTypes = {
  fetchOrders: PropTypes.func,
  match: PropTypes.object,
  order: PropTypes.object,
};

export default Order;
