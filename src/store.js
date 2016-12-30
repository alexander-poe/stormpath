import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducers.mainReducer, composeEnhancers(
	applyMiddleware(thunk)
));
