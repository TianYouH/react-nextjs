import { useState, useReducer, memo, useMemo, useCallback } from "react";

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

function MyCountMemo() {
  const [count, dispatchCount] = useReducer(countReducer, 0);
  const [name, setName] = useState('huang');

  // 使用 useMemo 声明config, 解决重新声明后内存指向不一样;
  // 参数二 是 config 是否重新声明取决于count值是否变化;
  // 结果：只要count不变，每次返回得值将是地址相同得对象;
  const config = useMemo(
    () => ({
      text: `count is ${count}`,
      color: count > 3 ? 'red':'blue',
    }),
    [count]
  )
  
  // 使用 useCallback 声明 handleButtonClick，
  // 保证 每次MyCountMemo重绘后返回地址一致得函数对象，
  const handleButtonClick = useCallback(
    () => dispatchCount('add'),
    [],
  )

  // useMemo 也能完成 useCallback 功能
  // const handleButtonClick = useMemo(
  //   () => () => dispatchCount('add'),
  //   [],
  // )

  return (
    <div>
      {/* name 值得变化会引起 MyCountMemo 重新渲染， 
          MyCountMemo 的重新渲染会导致 config 重新被声明，
          config 重新被声明，也会导致Child重绘*/}
      <input value={name} onChange={e => setName(e.target.value)} ></input>
      <Child config={config} onButtonClick={handleButtonClick} ></Child>
    </div>
  );
}

// memo 用于监听 Child props 是否发生变化（变化就更新），返回Boolean
// 如果不使用 memo 函数式组件将会因父组件更新而更新
const Child = memo(function Child({ onButtonClick, config }) {
  console.log('child render');
  return (
    <button onClick={onButtonClick} style={{ color: config.color }} >
      { config.text }
    </button>
  )
})

export default MyCountMemo;
