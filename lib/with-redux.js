import React from 'react';
import createStore from "../store/store";

const isServe = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  if (isServe) {
    return createStore(initialState);
  }
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = createStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default (Comp) => {
  class WithReduxApp extends React.Component {
    constructor( props ){
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }
    render() {
      const { Component, pageProps, ...rest } = this.props
      console.log("testHoc: ", Component, pageProps);
  
      if (pageProps) {
        pageProps.test = "123";
      }
  
      return <Comp Component={Component} pageProps={pageProps} {...rest} reduxStore={this.reduxStore} ></Comp>;
    }
  }

  // 适配nextjs模式
  WithReduxApp.getInitialProps = async (ctx) => {
    
    const reduxStore = getOrCreateStore();

    ctx.reduxStore = reduxStore

    let appProps = {}
    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(ctx);
    }
    
    return {
      ...appProps,
      initialReduxState: reduxStore.getState()
    }

  };
  
  return WithReduxApp;
};
