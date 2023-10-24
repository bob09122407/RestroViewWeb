import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createStore } from "@react-three/fiber/dist/declarations/src/core/store";

import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdatePasswordReducer,
  userErrorClearReducer,
} from "./reducers/userReducers";

import {
  restaurantAdvertisementReducer,
  cafeAdvertisementReducer,
} from "./reducers/advertisementReducer";
import{
  reelsReducer
} from "./reducers/reelReducer";
import {
  filterItemsReducerres,
  restaurantReducer,
} from "./reducers/restaurantReducer";
import { filterItemsReducercafe } from "./reducers/cafeReducers";
import { locationsReducer, 
          followReducer,
          searchReducer
} from "./reducers/nearmeReducer";
import { filterItemsReducervendor } from "./reducers/vendorReducer";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  updatePassword: userUpdatePasswordReducer,
  userDetails: userDetailsReducer,
  logout: userErrorClearReducer,
  restaurantAdvertisementReducer: restaurantAdvertisementReducer,
  cafeAdvertisementReducer: cafeAdvertisementReducer,
  filterItemsReducerres: filterItemsReducerres,
  filterItemsReducercafe: filterItemsReducercafe,
  locationsReducer: locationsReducer,
  filterItemsReducervendor: filterItemsReducervendor,
  restaurantReducer: restaurantReducer,
  followReducer:followReducer,
  reelsReducer:reelsReducer,
  searchReducer:searchReducer

});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
