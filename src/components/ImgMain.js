import React from 'react'
import styled from 'styled-components'

function ImgMain() {
  return (
    <Imgs>
        <img src='/images/img-slider-1.png'/>
    </Imgs>
  )
}

export default ImgMain


const Imgs = styled.div`
    img{
        width: 100% ;
    }
`