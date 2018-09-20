import React from 'react';
import { render } from 'react-dom';
import {
	createStore,
	applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index.js';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

render(
	<Root store={store} />,
	document.getElementById('root')
);
registerServiceWorker();

