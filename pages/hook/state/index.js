// import React from "react";

// class MyCount extends React.Component {
//   state = {
//     count: 0,
//   };

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 2000);
//   }

//   componentWillUnmount() {
//     if (this.interval) {
//       clearInterval(this.interval);
//     }
//   }

//   render() {
//     return <span>{this.state.count}</span>;
//   }
// }

// export default MyCount;

import { useState, useEffect } from "react";

function MyCountFunc() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <span>{count}</span>;
}

export default MyCountFunc;
