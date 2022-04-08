import React from 'react'
import styled from 'styled-components'


function Header() {
  
  return (
    <Nav>
        <Logo src='/images/logo.png' alt='logo'/>
        <Titulo>FM Estética</Titulo>
        <NavMenu>
           <Links>    
               <a href=''>Pacotes</a>
               <a href=''>Depoimentos</a>
               <a href=''> Sobre Nós</a>
           </Links>
        </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;

   @media(max-width: 1250px) {
   display: flex;
   flex-direction: column;
}

   @media(max-width: 500px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center ;
   }
`

const Logo = styled.img`
   width: 180px;  
     
`

const Titulo = styled.h1`
   font-family: Habibi;
   font-size: 90px;
   @media(max-width: 500px) {
      font-size: 60px ;
   }
`

const NavMenu = styled.div`
   font-family: Habibi;
   font-size: 30px;
   a{
       margin-left: 30px;
       text-decoration: none;
       cursor: pointer;
       color: black;
      
       &:after {
       content: "" ;
       height: 2px ;
       background: white ;
       position: absolute ;
       left: 0;
       right: 0;
       bottom: -6px ;
       opacity: 0 ;
       transform-origin: left center ;
       transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ;
       /* cubic bezier é uma função que define uma curca cubic bezier que é definida por 4 pontos */
       transform: scaleX(0);
     };
     &:hover {
    a:after{
       transform: scaleX(1) ;
       opacity: 1 ;
    };
   };

       @media(max-width: 1250px) {
         margin: 20px;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: space-between;

     }

     

     @media(max-width: 500px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center ;
   }
   }


`

const Links = styled.a``

