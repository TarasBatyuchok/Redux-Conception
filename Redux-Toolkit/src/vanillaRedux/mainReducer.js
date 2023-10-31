const defaultState = {
  customers: [],
  count: 0,
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMER";
const PLUS_COUNT = "PLUS_COUNT";
const MINUS_COUNT = "MINUS_COUNT";

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    case PLUS_COUNT:
      return { ...state, count: state.count + action.payload };
    case MINUS_COUNT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const addManyCustomersAction = (payload) => ({
  type: ADD_MANY_CUSTOMERS,
  payload,
});
export const removeCustomerAction = (payload) => ({
  type: REMOVE_CUSTOMER,
  payload,
});

export const plusCountAction = (payload) => ({ type: PLUS_COUNT, payload });
export const minusCountAction = (payload) => ({ type: MINUS_COUNT, payload });
