import React from 'react'
// import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'; //React.PropTypes已经从React v15.5移植到了一个不同的包中。使用prop-types库

import ComponentPropsChild from './propsChild'

const defaultProps = {
    note: '这是一个默认值'
}

export default class ComponentProps extends React.Component{

    constructor(){
        super();
        this.state = {
            name: ''
        }
    }

    changeUserName = () => {
        this.setState({
            name: '金金金' 
        })
        // refs  第一种
        // var myButton = document.getElementById('button');
        // ReactDOM.findDOMNode(myButton).style.color = 'red'
        // 第二种
        // this.refs.button.style.color = 'yellow'  //尽量少用refs
    }

    handleChildValue = (event) => {
        console.log('huhuhu')
        this.setState({
            name: event.target.value
        })
        // this.setState({
        //     name: '子页面数据'
        // })
    }

    render(){
        return (
            <div>
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2 style={{color: 'green'}}>props练习</h2>
                <p>{this.state.name || 'jijiji'}</p>
                <p>我叫:{this.props.name}</p>
                <p>今年:{this.props.age}</p>
                <p>备注:{this.props.note}</p>
                <button id='button' ref='button' type='button' onClick={this.changeUserName}>按钮</button>
                <ComponentPropsChild {...this.props} name={this.state.name || 'jijiji'} handleChildValue={this.handleChildValue}/>
            </div> 
        )
    }
}

// props值限制
ComponentProps.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

//默认props值 
ComponentProps.defaultProps = defaultProps;