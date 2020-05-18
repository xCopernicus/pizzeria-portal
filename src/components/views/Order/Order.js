import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';

const Order = (props) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    {props.match.params.id}
  </div>
);

Order.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default Order;
