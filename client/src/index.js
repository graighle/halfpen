import React from 'react';
import { render } from 'react-dom';
import {
	createStore,
	applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHalfpenApiCaller from './middleware/HalfpenApiCaller';
import rootReducer from './reducers/index.js';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

const halfpenApiCaller = createHalfpenApiCaller({
	url: 'http://localhost:5000/api/',
});
const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		halfpenApiCaller,
		loggerMiddleware
	)
);

render(
	<Root store={store} />,
	document.getElementById('root')
);
registerServiceWorker();

