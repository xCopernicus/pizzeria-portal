import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Container} from '@material-ui/core';

import TableSummary from '../../features/TableSummary/TableSummary';
import styles from './Ordering.module.scss';

const Ordering = ({loading: {active, error}, fetchOrders, orders}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrders();
    const interval = setInterval(() => {
      fetchOrders();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [fetchOrders]);

  const tables = ['1', '2', '3'];

  if(error || active) {
    return (
      <Container maxWidth='sm'>
        <h2>Ordering</h2>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Container>
    );
  } else {
    return(
      <Container maxWidth='lg'>
        {/* add loading indicator */}
        <div className={styles.component}>
          {tables.map(table => (
            <TableSummary key={table} table={table} fetchOrders={fetchOrders} orders={orders.filter(order => order.tableNo === table)} />
          ))}
        </div>
      </Container>
    );
  }
};

Ordering.propTypes = {
  fetchOrders: PropTypes.func,
  orders: PropTypes.array,
  loading: PropTypes.object,
};

export default Ordering;
