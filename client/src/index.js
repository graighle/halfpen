import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

render(
	<Root store={store} />,
	document.getElementById('root')
);
registerServiceWorker();

