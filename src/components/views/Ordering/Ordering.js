import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Container} from '@material-ui/core';
import OrderSummary from '../../features/OrderingOrderSummary/OrderingOrderSummary';
import styles from './Ordering.module.scss';

const Ordering = ({loading: {active, error}, fetchOrders, orders}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrders();
    const interval = setInterval(() => {
      fetchOrders();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [fetchOrders]);

  const tables = ['1', '2', '3'];

  if(error) {
    return (
      <Container maxWidth='sm'>
        <h2>Ordering</h2>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Container>
    );
  } else {
    return(
      <Container maxWidth='sm'>
        {active ? <p className={styles.loading}>Loading...</p> : ''}
        <div className={styles.component}>
          {tables.map(table => (
            <div key={table}>
              <div className={styles.table}>
                <h3>Table {table}</h3>
                <div className={styles.buttons}>
                  <Link to={`${process.env.PUBLIC_URL}/ordering/new/${table}`} ><Button variant='outlined' size='small' color='secondary'>New Order</Button></Link>
                </div>
              </div>
              <OrderSummary fetchOrders={fetchOrders} orders={orders.filter(order => order.tableNo === table)} />
            </div>
          ))}
        </div>
      </Container>
    );
  }
};

Ordering.propTypes = {
  fetchOrders: PropTypes.func,
  orders: PropTypes.array,
  loading: PropTypes.object,
};

export default Ordering;
