import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import ImgMain from './ImgMain'
import ImgMainTwo from './ImgMainTwo'
import Procedimentos from './Procedimentos'
import Promos from './Promos'



function Home() {
  return (
    <Container>
        <ImgMain/>
        <Procedimentos/>
        <Promos/>
        <ImgMainTwo/>
        <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.main`
`