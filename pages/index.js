import Link from "next/link";
import { Router } from "next/router";
import { Button } from "antd";

const color = "blue"
function App() {
  return (
    <>
      <div>
        App 页面信息
        <p>App p 11111</p>
        <span className="sp glo" >App span 22222</span>
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

export default App;
