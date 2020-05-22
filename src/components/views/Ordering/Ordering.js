import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Container} from '@material-ui/core';

import OrderSummary from '../../features/OrderingOrderSummary/OrderingOrderSummary';

import styles from './Ordering.module.scss';

const Ordering = ({fetchOrders}) => {

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(() => {
      fetchOrders();
    }, 5000);
    return () =>{
      clearInterval(interval);
    };
  }, [fetchOrders]);

  return(
    <Container maxWidth='sm'>
      <div className={styles.component}>
        <div className={styles.table}>
          <h3>Table 1</h3>
          <div className={styles.buttons}>
            <Link to={`${process.env.PUBLIC_URL}/ordering/new/1`} ><Button variant='outlined' size='small' color='secondary'>New Order</Button></Link>
          </div>
        </div>
        <OrderSummary />
        <div className={styles.table}>
          <h3>Table 2</h3>
          <div className={styles.buttons}>
            <Link to={`${process.env.PUBLIC_URL}/ordering/new/2`} ><Button variant='outlined' size='small' color='secondary'>New Order</Button></Link>
          </div>
        </div>
        <OrderSummary />
        <div className={styles.table}>
          <h3>Table 3</h3>
          <div className={styles.buttons}>
            <Link to={`${process.env.PUBLIC_URL}/ordering/new/3`} ><Button variant='outlined' size='small' color='secondary'>New Order</Button></Link>
          </div>
        </div>
        <OrderSummary />
      </div>
    </Container>
  );
};

Ordering.propTypes = {
  fetchOrders: PropTypes.func,
};

export default Ordering;
