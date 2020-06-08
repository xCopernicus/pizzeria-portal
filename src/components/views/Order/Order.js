import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import {Container, Button} from '@material-ui/core';
import {Row, Col} from 'react-flexbox-grid';

import DisplayProduct from '../../features/DisplayProduct/DisplayProduct';
import {api} from '../../../settings';

import styles from './Order.module.scss';

const Order = ({loading: {active, error}, fetchOrders, order}) => {

  const changeStatus = (newStatus) => {
    Axios
      .put(`${api.url}/${api.order}/${order.id}`, {
        ...order,
        status: newStatus,
      })
      .then(() => {
        fetchOrders();
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrders();
  }, [fetchOrders]);

  if (error) {
    return(
      <Container maxWidth='sm'>
        <div className={styles.component}>
          Error!
        </div>
      </Container>
    );
  } else if (!order) {
    return(
      <Container maxWidth='sm'>
        <div className={styles.component}>
          Loading...
        </div>
      </Container>
    );
  } else {
    let productKey = 0;
    console.log(order);
    return(
      <Container maxWidth='sm'>
        <h2 className={styles.title}>Order view</h2>
        {active ? <p className={styles.loading}>Loading...</p> : ''}
        <Row between='xs' className={styles.component}>
          <Col xs={4} className={styles.col}>
            <div className={styles.info}>
              <p>ID: {order.id}</p>
              <p>Status: {order.status}</p>
              <p>Type: {order.type}</p>
              {order.type === 'local' ? (
                <p>Table Number: {order.tableNo}</p>
              ) : (
                <>
                  <p>Phone: ${order.phone}</p>
                  <p>Address: ${order.address}</p>
                </>
              )}
              <p>Price: ${order.totalPrice}</p>
            </div>
          </Col>
          <Col xs={7} className={`${styles.products} ${styles.col}`}>
            {order.products.map(product => {
              productKey++;
              return(
                <DisplayProduct key={productKey} {...product} />
              );
            })}
          </Col>
          <Col xs={12} className={`${styles.buttons} ${styles.col}`}>
            <p>Change Status: </p>
            <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('cancel')}>cancel</Button>
            <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('ready')}>ready</Button>
            <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('delivered')}>delivered</Button>
            <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('paid')}>paid</Button>
            <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('done')}>done</Button>
          </Col>
        </Row>
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
