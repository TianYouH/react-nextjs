import "antd/dist/antd.css"; // or 'antd/dist/antd.less
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from 'antd'
import MyContext from '../lib/my-context'
import Layout from "../components/Layout.jsx";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [context, setContext] = useState(0);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? "with" : "without"
      //   } shallow routing`
      // );
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("beforeHistoryChange", handleRouteChange);
    router.events.on("hashChangeStart", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("beforeHistoryChange", handleRouteChange);
      router.events.off("hashChangeStart", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <hr></hr>
      <br></br>
      _app 层
      <Button onClick={() => setContext((o) => o + 1)} >更新 useContext 测试</Button>
      <hr></hr>
      <br></br>
      <MyContext.Provider value={context} >
        <Component {...pageProps} />
      </MyContext.Provider>
    </Layout>
  );
}

export default MyApp;
