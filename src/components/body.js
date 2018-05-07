import React from 'react';
import ReactMixin from 'react-mixin';
import '../css/style.css';
import MixinLog from './mixins';

const style1 = require('../css/style1.css');

export default class ComponentBody extends React.Component{

    constructor(){
        super();
        this.state = {
            fontSize: true
        }
    }
    
    componentWillMount() {
        console.log('body页面将要加载')
        
    }
    componentDidMount() {
        console.log('body页面加载结束')
        MixinLog.log()
    }

    switchFont = () => {
        this.setState({
            fontSize: !this.state.fontSize
        })
    }

    render() {

        let userName = ""

        let boolButton = false

        let html = '黄&nbsp;金'
        let html1 = '黄\u0020金'

        console.log(style1) //暂搁~~~待处理

        // const styleH1 = {
        //     color: 'red',
        //     paddingLeft: 20
        // }

        const styles = {
            h1: {
                color: 'red',
                paddingLeft: 20,
                fontSize: (this.state.fontSize) ? 12:20
            }
        };

        return (
            <main className="main">
                <h1 style={styles.h1} >我是主体</h1>
                <button type="button" onClick={this.switchFont}>变</button>
                <p>{userName===''? '用户未登陆':'用户名:'+userName}</p>
                <p className={style1.left20}><input type="button" value='按钮' disabled={boolButton}/></p>
                {/* 注释 */}
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html: html}}></p>{/* 不安全，会造成漏洞 */}
                <p>{html1}</p>
            </main>                    
        )
    }
}

ReactMixin(ComponentBody.prototype, MixinLog);

