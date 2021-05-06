import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import Document, { DocumentContext, Head, Main, NextScript, Html } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/K2D-Regular.ttf" crossOrigin="" as="font" />
          <link rel="preload" href="/fonts/K2D-Bold.ttf" crossOrigin="" as="font" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
