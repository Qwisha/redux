import rootReduser from "./reducser";
import { createStore } from "redux";
const store = createStore(rootReduser);
export default store;