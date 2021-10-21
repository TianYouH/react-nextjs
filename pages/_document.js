import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>我的 App</title>
          <style>
            {`.test {
              color: red;
            }`}
          </style>
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