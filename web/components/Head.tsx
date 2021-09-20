import React from 'react'
import HeadWrapper from 'next/head'

const Head: React.FC<{ title: string }> = ({ title }) => {
  return (
    <HeadWrapper>
      <title>Kraftuur - {title}</title>
      <meta property='og:title' content={title} />
      <meta property='twitter:title' content={title} />
      <meta
        name='description'
        content='🎨 A colour system for designing beautiful and accesible interfaces'
      />
      <meta
        property='og:description'
        content='🎨 A colour system for designing beautiful and accesible interfaces'
      />
      <meta
        property='twitter:description'
        content='🎨 A colour system for designing beautiful and accesible interfaces'
      />
      <meta property='og:type' content='website' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#1D87B5' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>'
      />
      <meta
        property='og:image'
        content='https://media.discordapp.net/attachments/716483368795111436/867278630987235358/Banner.png'
      />
      <meta
        property='twitter:image'
        content='https://media.discordapp.net/attachments/716483368795111436/867278630987235358/Banner.png'
      />
    </HeadWrapper>
  )
}

export default Head
