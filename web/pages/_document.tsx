import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@css/theme.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Lexend:wght@400;600&display=swap'
            rel='stylesheet'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
