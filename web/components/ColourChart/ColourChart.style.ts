import { styled, keyframes } from '@css/theme.config'

const TooltipAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-40px)',
  },
})

export const SwatchGrid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '100px 0',
})

export const SwatchRow = styled('div', {
  display: 'flex',
})

export const Swatch = styled('div', {
  width: '5vw',
  height: '5vw',
  transition: '0.1s linear',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    transform: 'scale(1.1, 1.1)',
    cursor: 'pointer',
    boxShadow: '0px 0px 50px 10px #00000039',
  },
  '@iPhone': {
    width: '9vw',
    height: '9vw',
  },
})

export const SwatchTooltip = styled('div', {
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  background: '$black5',
  padding: 10,
  color: '$white10',
  height: 'fit-content',
  opacity: 0,
  '.animate': {
    animation: `${TooltipAnimation} 0.5s linear`,
  },
})
