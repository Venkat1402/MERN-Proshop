import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// taking cartItems from local storage and assigning it to initial state as cart details should be stored in local storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
