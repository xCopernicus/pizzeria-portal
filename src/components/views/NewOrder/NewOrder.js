import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

import {Container} from '@material-ui/core';

import ChooseProduct from '../../features/ChooseProduct/ChooseProduct';
import Basket from '../../features/Basket/Basket';

import {api} from '../../../settings.js';

import styles from './NewOrder.module.scss';

const NewOrder = ({ loading: { active, error }, products, fetchProducts, basket, match, addProduct, deleteProduct, clearBasket}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    let totalPrice = 0;
    let totalNumber = 0;
    basket.forEach(product => totalPrice += product.price);
    basket.forEach(product => totalNumber += product.amount);
    setState({price: totalPrice, number: totalNumber});
  }, [basket]);

  const [state, setState] = useState({price: 0, number: 0});

  const sendOrder = () => {

    if(basket.length) {
      Axios
        .post(`${api.url}/${api.order}`, {
          status: 'ordered',
          type: 'local',
          tableNo: match.params.id,
          totalPrice: state.price,
          totalNumber: state.number,
          products: basket,
        })
        .then(() => {
          clearBasket();
          window.location.href = `${process.env.PUBLIC_URL}/ordering`;
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
    return (
      <Container maxWidth='md' className={styles.component}>
        <h2>New Order for Table {match.params.id}</h2>
        <Basket basket={basket} totalPrice={state.price} sendOrder={sendOrder} deleteProduct={deleteProduct} />
        <div className={styles.products}>
          {products.map(product => (
            <ChooseProduct key={product.id} {...product} addProduct={addProduct}/>
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
