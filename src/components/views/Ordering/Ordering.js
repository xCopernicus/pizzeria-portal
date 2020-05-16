import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Container} from '@material-ui/core';

import TableOrders from '../../features/TableOrders/TableOrders';

import styles from './Ordering.module.scss';

const Ordering = () => (
  <Container maxWidth='sm'>
    <div className={styles.component}>
      <div className={styles.table}>
        <h3>Table 1</h3>
        <div className={styles.buttons}>
          <Link to={`${process.env.PUBLIC_URL}/ordering/new`} ><Button variant='outlined' size='small' color='secondary'>New Order</Button></Link>
        </div>
      </div>
      <TableOrders />
      <div className={styles.table}>
        <h3>Table 2</h3>
        <div className={styles.buttons}>
          <Link to={`${process.env.PUBLIC_URL}/ordering/new`} ><Button variant='outlined' size='small' color='secondary'>New Order</Button></Link>
        </div>
      </div>
      <TableOrders />
      <div className={styles.table}>
        <h3>Table 3</h3>
        <div className={styles.buttons}>
          <Link to={`${process.env.PUBLIC_URL}/ordering/new`} ><Button variant='outlined' size='small' color='secondary'>New Order</Button></Link>
        </div>
      </div>
      <TableOrders />
    </div>
  </Container>
);

export default Ordering;
