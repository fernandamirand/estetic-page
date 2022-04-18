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
        width: 100%;
        box-shadow: rgb( 0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb( 0 0 0 / 73%) 0px 16px 18px -10px;
    }

    /* img:hover{
      -webkit-transform: scale(0.2);
      transform: scale(0.2) ;
    } */


`