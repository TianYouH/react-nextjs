import Link from "next/link";
import { Router } from "next/router";
import { Button } from "antd";
// import moment from 'moment';
import { connect } from 'react-redux';

const color = "blue"
function App({name, time, counter, username, rename, add}) {
  return (
    <>
      <div>
        App 页面信息
        <p>App p 11111</p>
        <span className="sp glo" >App span 22222</span>
        <p>我叫{name},在{time}是大佬</p>
        <p>redux-counter：{counter}</p>
        <p>redux-username：{username}</p>
        <input value={username} onChange={e=> rename(e.target.value)} ></input>
        <Button onClick={() => add(counter)} >redux-add</Button>
      </div>
      {/* 正常局部测试 */}
      <style jsx>{`
        div {
          color: red;
        }
        p {
          color: ${color};
        }
        .sp {
          color: yellow
        }
      `}</style>
      {/* 全局特性测试,当该组件移除全局效果也会失效 */}
      <style jsx global>{`
        .glo {
          color: green
        }
      `}</style>
    </>
  );
}


App.getInitialProps = async (ctx) => {
  const moment = await import("moment");
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "黄长生",
        time: moment.default(Date.now() - (1000*60*60)).fromNow()
      })
    }, 1000);
  })
  return promise;
};

export default connect(
function mapStateToProps(state) {
  return {
    counter: state.counter.count,
    username: state.user.username,
  }
},
function mapDispatchToProps(dispatch) {
  return {
    add: num => dispatch({type: "ADD", number: num}),
    rename: name => dispatch({type: "UPDATE_USERNAME", name})
  }
}
)(App);
