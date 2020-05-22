import {connect} from 'react-redux';
import Kitchen from './Kitchen';
import {getAllOrders, getOrdersLoadingState, fetchOrdersFromAPI} from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
