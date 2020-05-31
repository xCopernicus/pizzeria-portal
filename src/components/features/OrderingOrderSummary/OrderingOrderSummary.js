import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

import {api} from '../../../settings';

import styles from './OrderingOrderSummary.module.scss';

const OrderingOrderSummary = ({fetchOrders, id, status, totalPrice, ...other}) => {
  const changeStatus = (newStatus) => {
    Axios
      .put(`${api.url}/${api.order}/${id}`, {
        ...other,
        status: newStatus,
        id: id,
        totalPrice: totalPrice,
      })
      .then(() => {
        fetchOrders();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return(
    <div className={styles.component}>
      <p>{status}</p>
      <p>${totalPrice}</p>
      <div className={styles.buttons}>
        {status === 'ordered' ? <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('canceled')}>cancel</Button> : ''}
        {status === 'ready' ? <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('delivered')}>delivered</Button> : ''}
        {status === 'delivered' ? <Button variant='outlined' size='small' color='secondary' onClick={() => changeStatus('paid')}>paid</Button> : ''}
        <Link to={`${process.env.PUBLIC_URL}/ordering/order/${id}`}><Button variant='outlined' size='small' color='primary'>info</Button></Link>
      </div>
    </div>
  );
};

OrderingOrderSummary.propTypes = {
  fetchOrders: PropTypes.func,
  id: PropTypes.number,
  status: PropTypes.string,
  totalPrice: PropTypes.number,
};

export default OrderingOrderSummary;
