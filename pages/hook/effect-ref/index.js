import { Button } from "antd";
import { useReducer, useEffect, useRef } from "react";

function countReducer(state, action) {
  switch (action) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}

function MyCountEffect() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const refButton = useRef(null);
  const refCount = useRef();
  refCount.current = count;

  // const handleBBTest = () => {
  //   setTimeout(() => {
  //     // 这里会有闭包陷阱
  //     alert(count)
  //   }, 2000);
  // }

  const handleBBTest = () => {
    setTimeout(() => {
      // 这里会有闭包陷阱
      alert(refCount.current)
    }, 2000);
  }

  useEffect(() => {
    console.log("useEffect start");
    console.log("useRef refButton:", refButton);
    return () => console.log("useEffect end");
  }, [count]);
  return (
    <>
      <Button ref={refButton} onClick={() => dispatchCount("minus")}>
        {count}
      </Button>
      <Button onClick={handleBBTest} >
        测试闭包
      </Button>
    </>
  );
}

export default MyCountEffect;
