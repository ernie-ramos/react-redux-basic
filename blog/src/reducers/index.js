import { combineReducers } from 'redux';

const replaceMe = (state = 'hello world') => {
  return 'hello there';
};

export default combineReducers({
  replaceMe,
});
