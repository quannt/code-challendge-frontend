import Document, { Html, Head, Main, NextScript } from 'next/document'

class MaybeDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link href="/fonts/fonts-loader.css" rel="stylesheet"/>
        </Head>
        <body className="text-white bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MaybeDocument
