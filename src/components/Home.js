import React from 'react'
import styled from 'styled-components'
import ImgMain from './ImgMain'
import Procedimentos from './Procedimentos'


function Home() {
  return (
    <Container>
        <ImgMain/>
        <Procedimentos/>
    </Container>
  )
}

export default Home

const Container = styled.main`
`