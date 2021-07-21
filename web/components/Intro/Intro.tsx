import React from 'react'

import * as Icons from 'react-feather'
import * as S from './Intro.style'

import { copyToClipboard } from 'copy-lite'

const Intro: React.FC = () => {
  return (
    <S.IntroWrapper>
      <S.Header>Kraftuur</S.Header>
      <S.Description>
        🎨 A colour system for designing beautiful and accesible interfaces
      </S.Description>
      <S.Codeblock>
        yarn add kraftuur{' '}
        <Icons.Clipboard onClick={() => copyToClipboard('yarn add kraftuur')} />
      </S.Codeblock>
      <S.LinksWrapper>
        <S.Link
          href="https://github.com/harshhhdev/kraftuur/wiki/"
          target="_blank"
        >
          Documentation
        </S.Link>
        <S.Link href="https://github.com/harshhhdev/kraftuur/" target="_blank">
          GitHub
          <Icons.GitHub />
        </S.Link>
      </S.LinksWrapper>
    </S.IntroWrapper>
  )
}

export default Intro
