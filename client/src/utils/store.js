//import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers";
import { createStore } from "redux";

// export default configureStore({
//   reducer: appReducer,
// });

const store = createStore(appReducer);
export default store;
