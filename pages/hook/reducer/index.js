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

function MyCountReducer() {
  const [count, dispatchCount] = useReducer(countReducer, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatchCount('minus')
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <span>{count}</span>;
}

export default MyCountReducer;