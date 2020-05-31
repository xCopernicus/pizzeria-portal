import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {Button}  from '@material-ui/core';

import OrderingOrderSummary from '../OrderingOrderSummary/OrderingOrderSummary';

import styles from './TableSummary.module.scss';

const TableSummary = ({table, fetchOrders, orders}) => (
  <div className={styles.component}>
    <div className={styles.header}>
      <h3>Table {table} Orders</h3>
      <div className={styles.button}>
        <Link to={`${process.env.PUBLIC_URL}/ordering/new/${table}`} ><Button variant='outlined' size='small' color='primary'>New Order</Button></Link>
      </div>
    </div>
    {orders.length ? (
      <div>
        <div className={styles.info}>
          <p>Status</p>
          <p>Total</p>
          <p>Actions</p>
        </div>
        <div className={styles.orders}>
          {orders.map(order => (
            <OrderingOrderSummary key={order.id} fetchOrders={fetchOrders} {...order} />
          ))}
        </div>
      </div>
    ) : (
      <div className={styles.info}>
        <p>No orders made</p>
      </div>
    )}
  </div>
);

TableSummary.propTypes = {
  table: PropTypes.string,
  fetchOrders: PropTypes.func,
  orders: PropTypes.array,
};

export default TableSummary;
