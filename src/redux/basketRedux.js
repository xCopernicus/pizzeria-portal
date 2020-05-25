/* selectors */
export const getInfoForBasket = ({basket}) => basket;
export const getProductsForBasket = ({basket}) => basket.products;

/* action name creator */
const reducerName = 'newOrder';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('DELETE_PRODUCT');

/* action creators */

export const addProductToBasket = payload => ({ payload, type: ADD_PRODUCT });
export const removeProductFromBasket = payload => ({ payload, type: REMOVE_PRODUCT });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...statePart,
        products: [
          ...statePart.products,
          action.payload,
        ],
      };
    case REMOVE_PRODUCT:
      return {
        ...statePart,
        products: statePart.products.filter(product => product !== statePart.products[action.payload]),
      };
    default:
      return statePart;
  }
}
