import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
import Message from '../message/Message';

export default class Inbox extends Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        "Welcome to your Inbox"
        <Route path="/inbox/messages/:id" component={Message} />
      </div>
    )
  }
};
