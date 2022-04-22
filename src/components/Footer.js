import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <Container>
     <Main>

      <Content>
         <img src='/images/img-footer.png'/>
         <h1>Fulana de tal</h1>
      </Content>
        
        <Text>
            <h2>Graduada em lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        Especialista em  lorem ipsum lorem ipsum</h2>

            <h2>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        Especialista em  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
        ipsum lorem ipsum lorem ipsum lorem ipsum</h2>
        </Text>

      </Main>
      <Linha></Linha>
      <Rodape>
       <h3>Todos os direitos reservados</h3> 
       <p>2022©</p>
       
      </Rodape>
        {/* <h2>Todos os direitos reservados</h2> */}
    </Container>
  )
}

export default Footer

const Container = styled.div`
   
`

const Main = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding-top: 100px ;
   padding-bottom: 30px ;


`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
   img{
      padding-right: 15px ;
   }

   h1{
     font-size: 50px;
     font-family: Square Peg;
   }
`

const Text = styled.h2`

   font-size: 15px;
   font-family: Habibi;
   text-align: justify;
   width: 40%;
   padding-bottom: 80px;
   text-indent: 4em;
   
`
const Linha = styled.div`
     border: 1px solid #000;
     
`
const Rodape = styled.div`
   
   display: flex;
   flex-direction: column ;
   justify-content: center;
   align-items: center;
   height: 70px;
   
   

   h3, p {
     font-family: Habibi ;
   }


`