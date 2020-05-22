import {connect} from 'react-redux';
import Ordering from './Ordering';
import {fetchOrdersFromAPI} from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  orders: state.orders.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
