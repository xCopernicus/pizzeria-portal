import React from 'react';

import styles from './Product.module.scss'

import ProductOptions from '../ProductOptions/ProductOptions'

const Product = ({name, price, params}) => {

  let paramKeys
  params ? paramKeys = Object.keys(params) : paramKeys = []

  return(
    <div className={styles.component}>
      <h3>{name}</h3>
      {paramKeys.map(param => (
        <ProductOptions key={`${params[param].label} options`} {...params[param]} />
      ))}
      <p>Price: {price}</p>
    </div>
  )
}

export default Product;
