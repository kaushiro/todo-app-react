
import { Map, List } from "immutable";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";



const initial = Map({
    tasks: List()
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducer,
	initial,
	composeEnhancers(applyMiddleware(thunk))
);

//let tasks = store.getState().get("tasks");

export {store}