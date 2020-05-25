import React from 'react';
import PropTypes from 'prop-types';

import ProductOptions from '../DisplayProductOptions/DisplayProductOptions';

import styles from './ProductParams.module.scss';

const ProductParams = ({params}) => {

  let keys;
  params ? keys = Object.keys(params) : keys = [];

  return(
    <div className={styles.component}>
      {keys.map(param => (
        <div key={params[param].label}>
          <p>{params[param].label}:</p>
          <ProductOptions {...params[param]} />
        </div>
      ))}
    </div>
  );
};

ProductParams.propTypes = {
  params: PropTypes.object,
};

export default ProductParams;
