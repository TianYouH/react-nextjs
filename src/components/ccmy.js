import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

export default class CcmyCard extends React.Component{
    render(){
        return(
            <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title="长城门业"
                thumb={require('../images/LOGO.png')}
                extra={<span>总经理:黄朝强</span>}
              />
              <Card.Body>
                <div>
                  <h3>公司主营:</h3>
                  <p style={{textIndent: 30}}>批发钢木门,防盗门,室内门,非标门,木门,不锈钢门,实木复合门,仿铜门,免漆门,防火门,钢木室内门,生态门,钢质门,高分子门,安全门,强化木门,真铜门,门业配件,车库门等</p>
                  <h3>地址:</h3>
                  <p style={{textIndent: 30}}>京开大道北段南里商中间街路北长城门业。</p>
                  <h3>联系电话:</h3>
                  <p style={{textIndent: 30}}>15518535588</p>
                  <p style={{textIndent: 30}}>18639307788 微信</p>
                  <img style={{width: '100%'}} src={require('../images/location.png')}/>
                </div>
              </Card.Body>
              <Card.Footer content="制作人" extra={<div>黄大仙</div>} />
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
        )
    }
}