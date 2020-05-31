import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {Button} from '@material-ui/core';
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

  //change 'active' to ''
  const [state, setState] = useState({params: 'active', amount: 1, currentPrice: calculateCurrentPrice(paramsChosen), paramsChosen: paramsChosen});

  const handleAddProduct = () => {
    addProduct({
      id: id,
      amount: state.amount,
      price: state.amount * state.currentPrice,
      priceSingle: state.currentPrice,
      params: state.paramsChosen,
    });
  };

  const toggleOpen = () => {
    setState({...state, params: state.params ? '' : 'active'});
    console.log(state.params);
  };

  return(
    <div className={styles.component}>
      <div className={styles.header} onClick={toggleOpen}>
        <h3>{name}, {price}</h3>
        <FontAwesomeIcon icon={faSortDown} />
      </div>
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
        <input type='number' value={state.amount} onChange={e => setState({...state, amount: parseInt(e.target.value)})} />
        <p>Price: ${state.currentPrice * state.amount}</p>
        <Button variant='outlined' size='small' color='secondary' onClick={() => handleAddProduct()}>Add</Button>
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
