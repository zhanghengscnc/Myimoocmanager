import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/demo/Life.js';
import * as serviceWorker from './serviceWorker';
import Admin from './admin';
import BasicExample from './pages/demo/routerDemo/BasicExample'
import Home from './pages/demo/routerDemo3/Home';
import IRooter from "./IRouter";

ReactDOM.render(<IRooter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
