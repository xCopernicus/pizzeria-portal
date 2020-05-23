/* selectors */
export const getInfoForNewOrder = ({newOrder}) => newOrder;

/* action name creator */
const reducerName = 'newOrder';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('DELETE_PRODUCT');

/* action creators */

export const addProductToNewOrder = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });

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
      };
    default:
      return statePart;
  }
}
