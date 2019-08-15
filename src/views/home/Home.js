import React,{ Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'antd-mobile';

import About from '../about/About';
import Inbox from '../inbox/Inbox';

export default class Home extends Component{
  render() { 
    return (
      <div>
        <h1>Home</h1>
        <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
        <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul> 
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
      </div>
    )
  }
}

