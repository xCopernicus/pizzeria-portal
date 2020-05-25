import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import {Container, Button} from '@material-ui/core';

import Product from '../../features/OrderProduct/OrderProduct';
import BasketItem from '../../features/BasketItem/BasketItem';

import {api} from '../../../settings.js';

import styles from './NewOrder.module.scss';

const NewOrder = ({ loading: { active, error }, products, fetchProducts, basket, match, addProduct, deleteProduct, clearBasket}) => {

  useEffect(() => {
    fetchProducts();
  });

  const sendOrder = () => {

    if(basket.length){
      let totalPrice = 0;
      let totalNumber = 0;
      basket.forEach(product => totalPrice += product.price);
      basket.forEach(product => totalNumber += product.amount);

      Axios
        .post(`${api.url}/${api.order}`, {
          status: 'ordered',
          type: 'local',
          tableNo: match.params.id,
          totalPrice: totalPrice,
          totalNumber: totalNumber,
          products: basket,
        })
        .then((res) => {
          console.log(res);
          clearBasket();
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert('basket is empty');
    }
  };

  if(active || !products.length){
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>New Order for Table {match.params.id}</h2>
        <p>Loading...</p>
      </Container>
    );
  } else if(error) {
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>New Order for Table {match.params.id}</h2>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Container>
    );
  } else {
    let itemKey = 0;
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>New Order for Table {match.params.id}</h2>
        <div className={styles.basket}>
          <h3>Basket</h3>
          {basket.map(item => {
            itemKey++;
            return(
              <BasketItem key={itemKey} index={itemKey - 1} {...item} deleteProduct={deleteProduct} />
            );
          })}
          <Button variant='outlined' size='small' color='secondary' onClick={sendOrder}>Order</Button>
        </div>
        <div className={styles.products}>
          {products.map(product => (
            <Product key={product.id} {...product} addProduct={addProduct}/>
          ))}
        </div>
      </Container>
    );
  }
};

NewOrder.propTypes = {
  fetchProducts: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
  deleteProduct: PropTypes.func,
};


export default NewOrder;
