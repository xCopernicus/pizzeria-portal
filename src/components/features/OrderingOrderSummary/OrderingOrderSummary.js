import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

import {api} from '../../../settings';

import styles from './OrderingOrderSummary.module.scss';

const OrderingOrderSummary = ({fetchOrders, orders}) => (
  <div className={styles.component}>
    <h4>Orders</h4>
    <div className={styles.orders}>
      {orders.map(order => {

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

        return(
          <div key={order.id} className={styles.order}>
            <p>{order.status}</p>
            <p>{order.totalPrice}</p>
            {order.status === 'ordered' ? <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('canceled')}>cancel</Button> : ''}
            {order.status === 'ready' ? <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('delivered')}>delivered</Button> : ''}
            {order.status === 'delivered' ? <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('paid')}>paid</Button> : ''}
            <Link to={`${process.env.PUBLIC_URL}/ordering/order/${order.id}`}><Button variant='outlined' size='small' color='secondary'>more info</Button></Link>
          </div>
        );
      })}
    </div>
  </div>
);

OrderingOrderSummary.propTypes = {
  orders: PropTypes.array,
  fetchOrders: PropTypes.func,
};

export default OrderingOrderSummary;
