import { createStore } from "redux";

import { userOwnerReducer } from "./userOwner/reducer";

export const store = createStore(
  userOwnerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
