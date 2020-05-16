import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Wrapper = props => (
  <div>
    <h2>NewOrder view</h2>
    {props.children}
  </div>
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
        <ul>
          {products.map(({id, name, price}) => (
            <li key={id}>{name}, {price}</li>
          ))}
        </ul>
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
