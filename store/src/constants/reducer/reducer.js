import { UPDATE_RATING, UPDATE_TEXT } from '../constants/constants';    


// Define the initial state of the store
const initialState = {
  rating: 0,
  text: '',
};

// Define the reducer function that takes the state and action and returns the new state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RATING:
      // Return a new state with the updated rating
      return {
        ...state,
        rating: action.payload,
      };
    case UPDATE_TEXT:
      // Return a new state with the updated text
      return {
        ...state,
        text: action.payload,
      };
    default:
      // Return the state unchanged if the action type is not recognized
      return state;
  }
};

export default reducer;
