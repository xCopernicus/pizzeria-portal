import React from 'react';
import PropTypes from 'prop-types';

import DisplayProductParam from '../DisplayProductParam/DisplayProductParam';

import styles from './DisplayProduct.module.scss';

const DisplayProduct = ({id, amount, params}) => {

  let paramKeys;
  params ? paramKeys = Object.keys(params) : paramKeys = [];

  return(
    <div className={styles.component}>
      <div className={styles.header}>
        <h4>{id}</h4>
        <p>Amout: {amount}</p>
      </div>
      {paramKeys.map(param => (
        <DisplayProductParam key={params[param].label} {...params[param]} />
      ))}
    </div>
  );
};

DisplayProduct.propTypes = {
  params: PropTypes.object,
  id: PropTypes.string,
  amount: PropTypes.number,
};

export default DisplayProduct;
