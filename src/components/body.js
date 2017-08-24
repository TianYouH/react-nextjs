import React from 'react'

export default class ComponentBody extends React.Component{

    componentWillMount() {
        console.log('body页面将要加载')
    }
    componentDidMount() {
        console.log('body页面加载结束')
    }

    render() {

        let userName = ""

        let boolButton = false

        let html = '黄&nbsp;金'
        let html1 = '黄\u0020金'

        return (
            <main>
                <h1>我是主体</h1>
                <p>{userName==''? '用户未登陆':'用户名:'+userName}</p>
                <p><input type="button" value='按钮' disabled={boolButton}/></p>
                {/* 注释 */}
                <p>{html}</p>
                <p dangerouslySetInnerHTML={{__html: html}}></p>{/* 不安全，会造成漏洞 */}
                <p>{html1}</p>
            </main>                    
        )
    }
}