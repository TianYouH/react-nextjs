import React,{ Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/home/Home';

class App extends Component{
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    )
  }
};

export default App;
