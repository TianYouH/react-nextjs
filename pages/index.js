import Link from "next/link";
import { Router } from 'next/router';
import { Button } from "antd";

 function App () {
  // // 路由钩子事件 是全局性，注意销毁
  // Router.events.on('routeChangeStart', (event) => {
  //   console.log("routeChangeStart", event);
  // })
  // Router.events.on('routeChangeComplete', (event) => {
  //   console.log("routeChangeComplete", event);
  // })
  // Router.events.on('beforeHistoryChange', (event) => {
  //   console.log("beforeHistoryChange", event);
  // })
  // Router.events.on('hashChangeStart', (event) => {
  //   console.log("hashChangeStart", event);
  // })
  // Router.events.on('hashChangeComplete', (event) => {
  //   console.log("hashChangeComplete", event);
  // })
  // console.log("打印事件：", Router.events);
  return (
    <div>
      <Link href="/router">
        <Button>前往 router 测试</Button>
      </Link>
    </div>
  );
};

export default App;