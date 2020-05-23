import {connect} from 'react-redux';
import OrderProduct from './OrderProduct';
import {getInfoForNewOrder, addProductToNewOrder} from '../../../redux/newOrderRedux';

const mapStateToProps = (state) => ({
  products: getInfoForNewOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: product => dispatch(addProductToNewOrder(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderProduct);
