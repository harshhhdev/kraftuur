import { createCss } from '@stitches/react'

import * as Colours from 'kraftuur'

export const { css, styled, global, getCssString, keyframes } = createCss({
  theme: {
    colors: {
      ...Colours.Aquamarine,
      ...Colours.Black,
      ...Colours.Citrus,
      ...Colours.Cyan,
      ...Colours.ForestGreen,
      ...Colours.Green,
      ...Colours.Grey,
      ...Colours.HotPink,
      ...Colours.Lime,
      ...Colours.NavyBlue,
      ...Colours.Orange,
      ...Colours.Pink,
      ...Colours.Purple,
      ...Colours.Red,
      ...Colours.Rose,
      ...Colours.Rusty,
      ...Colours.SkyBlue,
      ...Colours.White,
      ...Colours.Yellow,
    },
    fontSizes: {
      1: '14px',
      2: '18px',
      3: '20px',
      4: '24px',
      5: '36px',
      6: '48px',
    },
    fonts: {
      main: 'Lexend Deca, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
  },
  media: {
    iPadPro: '(max-width: 1024px)',
    iPad: '(max-width: 768px)',
    iPhonePlus: '(max-width: 414px)',
    iPhone: '(max-width: 375px)',
    iPhoneSE: '(max-width: 320px)',
  },
})

export const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
})
