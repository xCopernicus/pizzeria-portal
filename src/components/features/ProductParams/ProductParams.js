import React from 'react';
import PropTypes from 'prop-types';

import ProductOptions from '../DisplayProductOptions/DisplayProductOptions';

import styles from './ProductParams.module.scss';

const ProductParams = ({params}) => (
  <div className={styles.component}>
    {Object.keys(params).map(param => (
      <div key={params[param].label}>
        <p>{params[param].label}:</p>
        <ProductOptions {...params[param]} />
      </div>
    ))}
  </div>
);

ProductParams.propTypes = {
  params: PropTypes.object,
};

export default ProductParams;
