import React, { Component } from 'react';

import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import ComponentBody from './components/body'

class App extends Component {

  componentWillMount() {
    console.log("app页面将要加载")
  }
  componentDidMount() {
    console.log("app页面加载结束")
  }

  render() {

    let combody = <ComponentBody/>

    return (
      <div className="App">
        <ComponentHeader/> 
        {combody}
        <ComponentFooter/>
      </div>
    );
  }
}

export default App;
