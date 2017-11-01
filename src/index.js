import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './Router'
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
