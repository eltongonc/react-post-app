import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './';

const middleWare = [
	thunk,
];

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleWare),
		// use chrome devtool plugin
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

export default store;
