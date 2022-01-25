import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk"; // redux 中间件：使 action 支持异步

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
      console.log("你号是", action.number);
      return { count: state.count + (action.number || 1) };
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
const store = createStore(
  allReducers,
  {
    counter: initialState,
    user: userInitialState,
  },
  applyMiddleware(ReduxThunk) // 使用中间件
);

// action creatore
function add(num) {
  return {
    type: ADD,
    number: num
  }
}

function addAsync(num) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(add(num))
    }, 1000);
  }
}

store.dispatch(add(3)) // 3

store.subscribe(() => {
  console.log('changed', store.getState());
})

store.dispatch({ type: ADD }) // 4

store.dispatch(addAsync(7)) // 11


export default store;
