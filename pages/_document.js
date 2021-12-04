import Document, { Html, Head, Main, NextScript } from 'next/document'

// 如果存在该文件，该文件会被默认引用
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* 不推荐在document中定义title,可以通过在页面中 import Head from 'next/head' 方式定义 */}
          {/* <title>我的 App</title>
          <style>
            {`.test {
              color: red;
            }`}
          </style> */}
        </Head>
        <body className="test" >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument