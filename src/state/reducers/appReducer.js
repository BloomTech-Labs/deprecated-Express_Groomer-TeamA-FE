import {
  POPULATE,
  POPULATE_USER,
  POPULATE_PET,
  CREATE_PET,
  EDIT_PET,
  DELETE_PET,
  GET_APPOINTMENTS,
  CREATE_APPOINTMENT,
  DELETE_APPOINTMENT,
  GET_BUSINESS_PROFILE,
  EDIT_BUSINESS_PROFILE_INFO,
} from '../actions/index';

const initialState = {
  profiles: [],
  pets: [],
  appointments: [],
  currentUser: {},
  businessProfile: {},
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE:
      return {
        ...state,
        profiles: [...action.payload],
      };
    case POPULATE_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case POPULATE_PET:
      return {
        ...state,
        pets: action.payload,
      };
    case CREATE_PET:
      return {
        ...state,
        pets: [...state.pets, ...action.payload],
      };
    case EDIT_PET:
      return {
        ...state,
        pets: state.pets.map(pet => {
          if (pet.id === action.payload.id) {
            return action.payload;
          } else {
            return pet;
          }
        }),
      };
    case DELETE_PET:
      return {
        ...state,
        pets: state.pets.filter(pet => {
          return pet.id !== action.payload.id;
        }),
      };
    case GET_APPOINTMENTS:
      return {
        ...state,
        appointments: [...action.payload],
      };
    case CREATE_APPOINTMENT:
      console.log('STATE', state);
      return {
        ...state,
        appointments: [...state.appointments, ...action.payload],
      };
    case DELETE_APPOINTMENT:
      return {
        ...state,
        appointments: state.appointments.filter(appointment => {
          return appointment.id !== action.payload.id;
        }),
      };
    case GET_BUSINESS_PROFILE:
      return {
        ...state,
        businessProfile: action.payload,
      };
    case EDIT_BUSINESS_PROFILE_INFO:
      return {
        ...state,
        businessProfile: {
          ...state.businessProfile,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
