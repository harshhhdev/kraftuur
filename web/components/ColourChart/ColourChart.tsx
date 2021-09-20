import React from 'react'

import * as S from './ColourChart.style'
import * as Colours from 'kraftuur'

import { copyToClipboard } from 'copy-lite'

const ColourChart: React.FC = () => {
  const [aquamarine, setAquamarine] = React.useState([''])
  const [citrus, setCitrus] = React.useState([''])
  const [cyan, setCyan] = React.useState([''])
  const [forestGreen, setForestGreen] = React.useState([''])
  const [green, setGreen] = React.useState([''])
  const [hotPink, setHotPink] = React.useState([''])
  const [lime, setLime] = React.useState([''])
  const [navyBlue, setNavyBlue] = React.useState([''])
  const [orange, setOrange] = React.useState([''])
  const [pink, setPink] = React.useState([''])
  const [purple, setPurple] = React.useState([''])
  const [red, setRed] = React.useState([''])
  const [rose, setRose] = React.useState([''])
  const [rusty, setRusty] = React.useState([''])
  const [skyBlue, setSkyBlue] = React.useState([''])
  const [yellow, setYellow] = React.useState([''])

  const [white, setWhite] = React.useState([''])
  const [grey, setGrey] = React.useState([''])
  const [black, setBlack] = React.useState([''])

  React.useEffect(() => {
    setAquamarine(Object.values(Colours.Aquamarine))
    setCitrus(Object.values(Colours.Citrus))
    setCyan(Object.values(Colours.Cyan))
    setForestGreen(Object.values(Colours.ForestGreen))
    setGreen(Object.values(Colours.Green))
    setHotPink(Object.values(Colours.HotPink))
    setLime(Object.values(Colours.Lime))
    setNavyBlue(Object.values(Colours.NavyBlue))
    setOrange(Object.values(Colours.Orange))
    setPink(Object.values(Colours.Pink))
    setPurple(Object.values(Colours.Purple))
    setRed(Object.values(Colours.Red))
    setRose(Object.values(Colours.Rose))
    setRusty(Object.values(Colours.Rusty))
    setSkyBlue(Object.values(Colours.SkyBlue))
    setYellow(Object.values(Colours.Yellow))

    setWhite(Object.values(Colours.White))
    setGrey(Object.values(Colours.Grey))
    setBlack(Object.values(Colours.Black))
  }, [])

  return (
    <>
      <S.SwatchGrid>
        <S.SwatchRow>
          {red.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {rose.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {hotPink.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {pink.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {purple.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {navyBlue.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {skyBlue.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {cyan.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {forestGreen.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {aquamarine.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {green.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {lime.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {yellow.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            >
              <S.SwatchTooltip>Copied!</S.SwatchTooltip>
            </S.Swatch>
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {rusty.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {citrus.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {orange.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
      </S.SwatchGrid>
      <S.SwatchGrid>
        <S.SwatchRow>
          {white.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {grey.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
        <S.SwatchRow>
          {black.map((variant, index) => (
            <S.Swatch
              style={{ backgroundColor: variant }}
              key={index}
              onClick={() => {
                copyToClipboard(variant)
              }}
            />
          ))}
        </S.SwatchRow>
      </S.SwatchGrid>
    </>
  )
}

export default ColourChart
