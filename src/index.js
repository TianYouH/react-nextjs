import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //单例测试
import Root from './Router'; //引入router测试（）
import registerServiceWorker from './registerServiceWorker';
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
