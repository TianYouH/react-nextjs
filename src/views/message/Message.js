import React,{ Component } from 'react';

export default class Message extends Component{
  render() {
    return <h3>Message{this.props.match.params.id}</h3>
  }
}
