import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Ordering.scss';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <Link to={`${process.env.PUBLIC_URL}/ordering/new`} >New Order</Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/123`} >Order</Link>
  </div>
);

export default Ordering;
