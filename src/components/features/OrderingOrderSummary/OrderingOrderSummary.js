import React from 'react';

import {Button} from '@material-ui/core';

import styles from './OrderingOrderSummary.module.scss';

const OrderingOrderSummary = () => (
  <div className={styles.component}>
    <h4>Orders</h4>
    <div className={styles.orders}>
      <div className={styles.order}>
        status createdDate Total
        <Button variant='outlined' size='small' color='secondary'>Done</Button>
      </div>
      <div className={styles.order}>
        status createdDate Total
        <Button variant='outlined' size='small' color='secondary'>Done</Button>
      </div>
      <div className={styles.order}>
        status createdDate Total
        <Button variant='outlined' size='small' color='secondary'>Done</Button>
      </div>
    </div>
  </div>
);

export default OrderingOrderSummary;
