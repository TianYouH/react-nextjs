import { Button } from 'antd'
import { useReducer, useEffect } from "react";

function countReducer(state, action) {
  switch (action) {
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state;
  }
}

function MyCountEffect() {
  const [count, dispatchCount] = useReducer(countReducer, 0);

  useEffect(() => {
    console.log("useEffect start");
    return () => console.log("useEffect end");;
  }, ['count']);
  return <Button onClick={() => dispatchCount('minus')} >{count}</Button>;
}

export default MyCountEffect;