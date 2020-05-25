/* selectors */
export const getProductsForBasket = ({basket}) => basket;

/* action name creator */
const reducerName = 'newOrder';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('DELETE_PRODUCT');
const CLEAR_BASKET = createActionName('CLEAR_BASKET');

/* action creators */

export const addProductToBasket = payload => ({ payload, type: ADD_PRODUCT });
export const removeProductFromBasket = payload => ({ payload, type: REMOVE_PRODUCT });
export const clearBasket = () => ({ type: CLEAR_BASKET });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...statePart, action.payload];
    case REMOVE_PRODUCT:
      return statePart.filter(product => product !== statePart[action.payload]);
    case CLEAR_BASKET:
      return [];
    default:
      return statePart;
  }
}
