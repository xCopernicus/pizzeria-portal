import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {Container} from '@material-ui/core';
import {Row, Col} from 'react-flexbox-grid';

import OrderSummary from '../../features/KitchenOrderSummary/KitchenOrderSummary';

import styles from './Kitchen.module.scss';

const Kitchen = ({loading: {active, error}, fetchOrders, orders}) => {

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(() => {
      fetchOrders();
    }, 5000);
    return () =>{
      clearInterval(interval);
    };
  }, [fetchOrders]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if(error) {
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>Kitchen</h2>
        <p>Error!</p>
        <pre>{error}</pre>
      </Container>
    );
  } else {
    return(
      <Container maxWidth='lg'>
        <h2 className={styles.title}>Kitchen view</h2>
        {active ? <p className={styles.loading}>Loading...</p> : ''}
        <div className={styles.component}>
          <Row between='xs'>
            <Col xs={5} className={styles.orders}>
              <h3>Local</h3>
              <div className={styles.info}>
                <p>ID number</p>
                <p>Status</p>
                <p>Action</p>
              </div>
              {orders.map(order => (
                order.type === 'local' && order.status === 'ordered' ? <OrderSummary key={order.id} fetchOrders={fetchOrders} {...order} /> : ''
              ))}
            </Col>
            <Col xs={5} className={styles.orders}>
              <h3>Delivery</h3>
              <div className={styles.info}>
                <p>ID number</p>
                <p>Status</p>
                <p>Action</p>
              </div>
              {orders.map(order => (
                order.type === 'delivery' && order.status === 'ordered' ? <OrderSummary key={order.id} fetchOrders={fetchOrders} {...order} /> : ''
              ))}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
};

Kitchen.propTypes = {
  fetchOrders: PropTypes.func,
  orders: PropTypes.array,
  loading: PropTypes.object,
};

export default Kitchen;
