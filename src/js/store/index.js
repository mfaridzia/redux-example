import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/index";

// Untuk menggunakan redux dev tools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;
