import React from 'react'
import styled from 'styled-components'

function Promos() {
  return (
    <Container>
        <Title>Promoções</Title>
        <Content>
         <FirstRow>
          <Wrap>
          <p>5 pacotes de massagem relaxante por apenas R$500,00</p>
          <img src='/images/pct-massagem.png'/>
          </Wrap>
          <Wrap>
          <p>5 pacotes de massagem relaxante por apenas R$500,00</p>
          <img src='/images/pct-massagem.png'/>
          </Wrap>
          </FirstRow>
          
          <SecondRow>
          <Wrap>
          <p>5 pacotes de massagem relaxante por apenas R$500,00</p>
          <img src='/images/pct-massagem.png'/>
          </Wrap>
          <Wrap>
          <p>5 pacotes de massagem relaxante por apenas R$500,00</p>
          <img src='/images/pct-massagem.png'/>
          </Wrap>
          </SecondRow>
        </Content>
        
          
      
    </Container>
  )
}

export default Promos

const Container = styled.div`

 
`
const Title = styled.h1`
    font-family: Habibi;
   font-size: 60px;
   display: flex;
   justify-content: center ;

`
const Content = styled.div`
   display: flex ;
   flex-direction: column;
   padding-top: 30px ;
   
   
    
    `
const Wrap = styled.div`
   img{
     width: 500px;
     height: 300px;
     
   }

   p{
     text-align: center ;
     padding-bottom:  15px ;
     font-family: Habibi;
     font-size: 18px;
   }
   
   
   `

const FirstRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   padding-bottom: 40px ;
   
   `



const SecondRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly ;
   padding-bottom: 40px ;
   
`

