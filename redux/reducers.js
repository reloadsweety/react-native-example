import { combineReducers } from 'redux';

const defaultState = {
  isFetching: false,
  data: []
};

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case 'SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  posts
});
