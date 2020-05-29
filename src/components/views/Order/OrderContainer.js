import {connect} from 'react-redux';
import Order from './Order';
import {fetchOrdersFromAPI, getOrder, getOrdersLoadingState} from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => ({
  order: getOrder(state, props.match.params.id),
  loading: getOrdersLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
