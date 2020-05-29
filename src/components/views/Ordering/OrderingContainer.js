import {connect} from 'react-redux';
import Ordering from './Ordering';
import {fetchOrdersFromAPI, getLocalOrders, getOrdersLoadingState} from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  orders: getLocalOrders(state),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
