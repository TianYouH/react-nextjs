import { createStore } from "redux";

const initialState = {
  count: 0,
};

const ADD = "ADD";

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      // 一定要返回新的对象，否则可能会导致页面更新失败
      // 直接更新属性值，会影响react去判断我们的组件是否需要更新（对比地址结果相等，导致不渲染绘制）
      // return state.count + 1;
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export default store;
