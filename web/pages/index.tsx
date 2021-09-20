import React from 'react'

import { ContentWrapper } from '@css/theme.config'
import global from '@css/global.style'

import Head from '@components/Head'
import Intro from '@components/Intro/Intro'
import ColourChart from '@components/ColourChart/ColourChart'
import Footer from '@components/Footer'

const Home: React.FC = () => {
  global()

  return (
    <ContentWrapper>
      <Head title='Home' />
      <Intro />
      <ColourChart />
      <Footer />
    </ContentWrapper>
  )
}

export default Home
