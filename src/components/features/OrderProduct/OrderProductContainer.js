import {connect} from 'react-redux';
import OrderProduct from './OrderProduct';
import {getInfoForBasket, addProductToBasket} from '../../../redux/basketRedux';

const mapStateToProps = (state) => ({
  products: getInfoForBasket(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: product => dispatch(addProductToBasket(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderProduct);
