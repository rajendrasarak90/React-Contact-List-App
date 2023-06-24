import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

// redux store for storing the state
const store = createStore(contactReducer, composeWithDevTools());

const root = createRoot(document.querySelector('#root'));

root.render(
    // Provider component in which app component is wrapped and gets state
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);