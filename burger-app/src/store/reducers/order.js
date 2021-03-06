import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const INITIAL_STATE = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGUER_SUCCESS:
      const newOrder = updateObject(action.orderData, { id: action.orderId });
      return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
      });
    case actionTypes.PURCHASE_BURGUER_FAIL:
      return updateObject(state, { loading: false });
    case actionTypes.PURCHASE_BURGUER_START:
      return updateObject(state, { loading: true });
    case actionTypes.PURCHASE_INIT:
      return updateObject(state, { purchased: false });
    case actionTypes.FETCH_ORDERS_START:
      return updateObject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { loading: false, orders: action.orders });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
