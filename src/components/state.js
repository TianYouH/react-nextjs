import React from 'react'

export default class ComponentState extends React.Component {

    constructor(){
        super(); //调用父类的所有初始化方法
        this.state = {
            userName: '黄金亮',
            age: 18
        }
    }

    render() {

        setTimeout(() => {
            this.setState({
                userName: '金闪闪',
                age: 24
            })
        }, 4000);

        return (
            <div>
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                <h2 style={{color: 'red'}}>state练习</h2>
                <p>姓名：{this.state.userName}</p>
                <p>年龄：{this.state.age}</p>
            </div>  
        )
    }
}