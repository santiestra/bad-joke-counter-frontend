import createStore from "redux-zero";

const initialState = { count: 0, countByUser: {} };
const store = createStore(initialState);

export default store;
