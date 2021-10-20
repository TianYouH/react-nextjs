// import App from 'next/app'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('beforeHistoryChange', handleRouteChange)
    router.events.on('hashChangeStart', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('beforeHistoryChange', handleRouteChange)
      router.events.off('hashChangeStart', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
 