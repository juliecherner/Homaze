import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { contractsReducer } from "./contracts/reducers";
import { contractSaga } from "./contracts/sagas";

const reducer = combineReducers({ contracts: contractsReducer });

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(contractSaga);

export default store;
