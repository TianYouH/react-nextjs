import React,{ Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends  Component{
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    )
  }
};

class Home extends Component{
  render() { 
    return (
      <div>
        <h1>Home</h1>
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

class About extends Component{
  render() {
    return <h3>About</h3>
  }
}

class Inbox extends Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        "Welcome to your Inbox"
        <Route path="/inbox/messages/:id" component={Message} />
      </div>
    )
  }
}

class Message extends Component{
  render() {
    return <h3>Message{this.props.match.params.id}</h3>
  }
}

export default App;
