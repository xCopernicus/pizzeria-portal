import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {Button, Switch, FormControlLabel}  from '@material-ui/core';

import OrderingOrderSummary from '../OrderingOrderSummary/OrderingOrderSummary';

import styles from './TableSummary.module.scss';

const TableSummary = ({table, fetchOrders, orders}) => {

  const [ordersFiltered, setOrdersFiltered] = useState(orders.filter(order => order.status !== 'canceled' && order.status !== 'done'));
  const [checked, setChecked] = useState(false);

  //let ordersFiltered = orders.filter(order => order.status !== 'canceled' && order.status !== 'done');

  useEffect(() => {
    if(checked){
      setOrdersFiltered(orders);
    } else {
      setOrdersFiltered(orders.filter(order => order.status !== 'canceled' && order.status !== 'done'));
    }
  }, [checked, orders]);

  return(
    <div className={styles.component}>
      <div className={styles.header}>
        <h3>Table {table} Orders</h3>
        <div className={styles.buttons}>
          <FormControlLabel
            control={
              <Switch
                color='secondary'
                onChange={e => setChecked(e.target.checked)}
                name='showAll'
                checked={checked}
              />
            }
            label='All'
            size='small'
          />
          <Link to={`${process.env.PUBLIC_URL}/ordering/new/${table}`} ><Button variant='outlined' size='small' color='primary'>New Order</Button></Link>
        </div>
      </div>
      {ordersFiltered.length ? (
        <div>
          <div className={styles.info}>
            <p>Status</p>
            <p>Total</p>
            <p>Actions</p>
          </div>
          <div className={styles.orders}>
            {ordersFiltered.map(order => (
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
};

TableSummary.propTypes = {
  table: PropTypes.string,
  fetchOrders: PropTypes.func,
  orders: PropTypes.array,
};

export default TableSummary;
