import { globalCss } from './theme.config'

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
    fontFamily: '$main',
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    background: '$black1',
    overflowX: 'hidden',
  },
  '::selection': {
    background: '#35a6f740',
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 10,
  },
  'body::-webkit-scrollbar-track': {
    background: 'none',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$grey1',
  },
  '.invalid': {
    border: '2px solid $red7',
  },
})

export default globalStyle
