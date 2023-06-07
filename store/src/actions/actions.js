import { UPDATE_RATING, UPDATE_TEXT } from '../constants/constants';


// Action creator for updating the rating
export const updateRating = (rating) => {
  return {
    type: UPDATE_RATING,
    payload: rating,
  };
};

// Action creator for updating the text
export const updateText = (text) => {
  return {
    type: UPDATE_TEXT,
    payload: text,
  };
};
