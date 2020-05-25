import {connect} from 'react-redux';
import NewOrder from './NewOrder';
import {getAllProducts, fetchProductsFromAPI, getProductsLoadingState} from '../../../redux/productRedux';
import {getProductsForBasket, removeProductFromBasket, addProductToBasket} from '../../../redux/basketRedux';

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loading: getProductsLoadingState(state),
  basket: getProductsForBasket(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
  addProduct: product => dispatch(addProductToBasket(product)),
  deleteProduct: index => dispatch(removeProductFromBasket(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewOrder);
