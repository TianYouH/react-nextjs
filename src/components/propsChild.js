import React from 'react'

export default class ComponentPropsChild extends React.Component{

    constructor(){
        super();
        this.state = {
        }
    }

    changeUserName = () => {
    }

    render(){
        return (
            <div>
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h3 style={{color: 'green'}}>propsChild练习</h3>
                <p>app界面过来的age值:{this.props.age}</p>
                <button type='button' onClick={this.props.handleChildValue}>按钮</button>
                <input type='text' value={this.props.name} onChange={this.props.handleChildValue}></input>
            </div> 
        )
    }
}