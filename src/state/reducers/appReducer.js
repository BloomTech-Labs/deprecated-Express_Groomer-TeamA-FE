import {
  POPULATE,
  POPULATE_GROOMER,
  POPULATE_CUSTOMER,
} from '../actions/index';

const initialState = {
  profiles: [],
  customerInfo: {},
  groomerInfo: {},
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE:
      console.log(action.payload);
      return {
        ...state,
        profiles: state.profiles.append(action.payload),
      };
    case POPULATE_GROOMER:
      return {
        ...state,
        groomerInfo: action.payload,
      };
    case POPULATE_CUSTOMER:
      return {
        ...state,
        customerInfo: action.payload,
      };
    default:
      return state;
  }
};
