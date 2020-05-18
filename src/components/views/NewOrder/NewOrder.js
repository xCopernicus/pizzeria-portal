import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './NewOrder.module.scss'

import {Container} from '@material-ui/core'

import Product from '../../features/Product/Product'

const Wrapper = props => (
  <Container maxWidth='md' className={styles.component}>
    <div>
      <h2>New Order</h2>
      {props.children}
    </div>
  </Container>
);

const NewOrder = ({ loading: { active, error }, products, fetchProducts }) => {

  useEffect(() => (
    fetchProducts()
  ), [fetchProducts])

  if(active || !products.length){
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  } else if(error) {
    return (
      <Wrapper>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {products.map((product) => (
          <Product key={product.id} {...product}/>
        ))}
      </Wrapper>
    );
  }
}

NewOrder.propTypes = {
  fetchProducts: PropTypes.func,
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
}


export default NewOrder;
