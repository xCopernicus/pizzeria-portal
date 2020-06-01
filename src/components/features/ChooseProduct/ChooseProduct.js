import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button, TextField} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import ChooseProductParam from '../ChooseProductParam/ChooseProductParam';

import styles from './ChooseProduct.module.scss';

const ChooseProduct = ({name, id, price, params, addProduct}) => {

  let paramKeys;
  params ? paramKeys = Object.keys(params) : paramKeys = [];

  const calculateCurrentPrice = (newParamsChosen) => {
    let currentPrice = price;
    paramKeys.forEach(param => {
      Object.keys(params[param].options).forEach(option => {
        if (newParamsChosen[param].options[option]){
          currentPrice += params[param].options[option].price;
        }
      });
    });
    return currentPrice;
  };

  let paramsChosen = {};
  paramKeys.forEach(param => {
    paramsChosen[param] = {
      label: params[param].label,
      options: {},
    };
    Object.keys(params[param].options).forEach(option => {
      if (params[param].options[option].default){
        paramsChosen[param].options[option] = params[param].options[option].label;
      }
    });
  });

  const [state, setState] = useState({params: false, amount: 1, currentPrice: calculateCurrentPrice(paramsChosen), paramsChosen: paramsChosen});

  const handleAddProduct = () => {
    addProduct({
      id: id,
      amount: state.amount,
      price: state.amount * state.currentPrice,
      priceSingle: state.currentPrice,
      params: state.paramsChosen,
    });
  };

  const handleAmountChange = newAmount => {
    if(1 <= newAmount && newAmount <= 9){
      setState({...state, amount: newAmount});
    }
  };

  return(
    <div className={`${styles.component} ${state.params ? styles.active : ''}`}>
      {paramKeys.length ? (
        <div className={styles.header} onClick={() => setState({...state, params: state.params ? false : true})}>
          <h3>{name}</h3>
          <FontAwesomeIcon className={styles.icon} icon={faSortDown} />
        </div>
      ) : (
        <div className={`${styles.header} ${styles.default}`}>
          <h3>{name}</h3>
        </div>
      )}
      <div className={`${styles.params} ${state.params ? styles.active : ''}`}>
        {paramKeys.map(param => {
          const optionsCallback = (data) => {
            let newParamsChosen = {
              ...state.paramsChosen,
              [param]: {
                label: params[param].label,
                options: data,
              },
            };
            setState({
              ...state,
              paramsChosen: newParamsChosen,
              currentPrice: calculateCurrentPrice(newParamsChosen),
            });
          };
          return(
            <ChooseProductParam key={`${params[param].label} options`} {...params[param]} optionsChosen={state.paramsChosen[param].options} optionsCallback={optionsCallback} />
          );
        })}
      </div>
      <div className={styles.summary}>
        <TextField
          type='number'
          value={state.amount}
          onChange={e => handleAmountChange(e.target.value)}
          id="amount"
          label="Amount"
          color='secondary'
          size='small'
        />
        <p>Price: ${state.currentPrice * state.amount}</p>
        <Button variant='outlined' size='small' color='primary' onClick={() => handleAddProduct()}>Add</Button>
      </div>
    </div>
  );
};

ChooseProduct.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  params: PropTypes.object,
  addProduct: PropTypes.func,
};

export default ChooseProduct;
