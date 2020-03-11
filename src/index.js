import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import store from "./store";
import 'react-toastify/dist/ReactToastify.css';
import '../public/style.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
  // document.getElementById('root')
    document.getElementById('monster_content')

);
