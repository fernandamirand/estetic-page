import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import styled from 'styled-components';

function Procedimentos() {

  var settings = {
    arrows: false,
    dots:true,
    infinite:false,
    speed:500,
    slidesToShow:4,
    slidesToScroll:4,
    
  }
  return (
    <Container>
      <Title>Procedimentos</Title>
     <Main {...settings}>
       <Wrap>
         <img src='/images/limpeza-de-pele.png'/>
         <p>Limpeza de Pele</p>
       </Wrap>
       <Wrap>
         <img src='/images/redutor.jpg'/>
         <p>Tratamento Redutor</p>
       </Wrap>
       <Wrap>
       <img src='/images/massagem-relaxante.png'/>
       <p>Massagem Relaxante</p>
       </Wrap>
       <Wrap>
       <img src='/images/microagulhamento.png'/>
       <p>Microagulhamento</p>
       </Wrap>
       <Wrap>
       <img src='/images/limpeza-de-pele.png'/>
       <p>Criolipólise</p>
       </Wrap>
       <Wrap>
       <img src='/images/limpeza-de-pele.png'/>
       <p>Carboxiterapia</p>
       </Wrap>
       <Wrap>
       <img src='/images/limpeza-de-pele.png'/>
       <p>Carboxiterapia</p>
       </Wrap>
       <Wrap>
       <img src='/images/limpeza-de-pele.png'/>
       <p>Carboxiterapia</p>
       </Wrap>
     </Main>
     </Container>
  )
}

export default Procedimentos

const Main = styled(Slider)`
   

`

const Container = styled.div`
   padding-top: 50px;
   padding-bottom: 50px;
`

const Title = styled.h1`
   font-family: Habibi;
   font-size: 60px;
   display: flex;
   justify-content: center;
`


const Wrap = styled.div`
   padding-top: 20px;
   height: 350px ;

   img{
     width: 318px;
     height: 301px;
     border-radius: 10px;
   }

   &:hover{
       transform: scale(1.05);
      
   }

   p{
     font-family: Habibi;
     font-size: 25px;
     text-align: center ;
   }
   
   
`