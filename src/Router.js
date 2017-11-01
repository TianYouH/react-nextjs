import React,{Component} from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
/* eslint-disable */

const Home = () => {
    <div>
        <h2>Home</h2>
    </div>
}

const Huang = () => {
    <div>
        <h2>Huang</h2>
    </div>
}

const Jin = () => {
    <div>
        <h2>jin</h2>
    </div>
}

export default class Root extends Component {
    
      componentWillMount() {
        console.log("app页面将要加载")
      }
      componentDidMount() {
        console.log("app页面加载结束")
      }
    
      render() {
        return (
            <Router className="Root">
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/huang'>Huang</Link></li>
                        <li><Link to='/jin'>Jin</Link></li>
                    </ul>
            
                    <hr/>
            
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/huang' component={Huang}></Route>
                    <Route exact path='/jin' component={Jin}></Route>
                </div>
            </Router>
        )
      }
}
    


