import {combineReducers} from 'redux';
import auth from './auth.reducer';
// import product from './product.reducer';

const rootReducer = combineReducers({
  auth,
  // product,
});

export default rootReducer;
