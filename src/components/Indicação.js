import React from 'react'
import styled from 'styled-components'


function Indicação() {
  return (
    <Container>
        <div></div>
        <h1>Indicação</h1>
        <p>Indique um amigo para qualquer procedimento e ganhe 50% de desconto pra fazer o mesmo!</p>
        {/* <div></div> */}
    </Container>
  )
}

export default Indicação

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;

  /* div{
    border: 1px solid #000;
    
  } */
  
 
   h1{
       font-family: Habibi;
       font-size: 60px;
       display: flex;
       justify-content: center ;
       padding-top: 20px;
   }

   p{
       font-family: Habibi;
       font-size: 40px ;
       text-align: center;
       padding-bottom: 20px ;
       
   }



   
`