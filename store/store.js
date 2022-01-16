// import { createStore } from "redux";
import { createStore, combineReducers } from "redux";

const initialState = {
  count: 0,
};

const userInitialState = {
  username: "huang",
};

const ADD = "ADD";

function counterReducer(state = initialState, action) {
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

const UPDATE_USERNAME = "UPDATE_USERNAME";

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.name,
      };
    default:
      return state;
  }
}

const allReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// const store = createStore(counterReducer, initialState);
const store = createStore(allReducers, {
  counter: initialState,
  user: userInitialState,
});

export default store;
