import { styled } from '@css/theme.config'

export const IntroWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 100,
})

export const Header = styled('h1', {
  fontSize: '$6',
  color: '$white9',
})

export const Description = styled('p', {
  fontSize: '$3',
  color: '$grey3',
  margin: '20px 0 50px 0',
  textAlign: 'center',
})

export const LinksWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
})

export const Link = styled('a', {
  display: 'flex',
  alignItems: 'center',
  color: '$white1',
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    color: '$white10',
  },
  svg: {
    width: 20,
    marginLeft: 10,
  },
})

export const Codeblock = styled('p', {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$mono',
  color: '$white5',
  background: '$black3',
  padding: '10px 20px',
  borderRadius: 50,
  svg: {
    width: 20,
    marginLeft: 10,
    '&:hover': {
      cursor: 'pointer',
    },
  },
})
