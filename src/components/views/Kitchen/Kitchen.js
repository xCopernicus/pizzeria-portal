import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Container} from '@material-ui/core';
import {Row, Col} from 'react-flexbox-grid';

import OrderSummary from '../../features/KitchenOrderSummary/KitchenOrderSummary';

import styles from './Kitchen.module.scss';

const Kitchen = ({fetchOrders, orders}) => {

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
    <Container maxWidth='md'>
      <div className={styles.component}>
        <h2>Kitchen view</h2>
        <Row between='xs'>
          <Col xs={5} className={styles.orders}>
            <h3>Local</h3>
            {orders.map(order => (
              order.type === 'local' && order.status === 'ordered' ? <OrderSummary key={order.id} fetchOrders={fetchOrders} {...order} /> : ''
            ))}
          </Col>
          <Col xs={5} className={styles.orders}>
            <h3>Delivery</h3>
            {orders.map(order => (
              order.type === 'delivery' && order.status === 'ordered' ? <OrderSummary key={order.id} fetchOrders={fetchOrders} {...order} /> : ''
            ))}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

Kitchen.propTypes = {
  fetchOrders: PropTypes.func,
  orders: PropTypes.array,
};

export default Kitchen;
