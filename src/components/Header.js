import React from 'react'
import styled from 'styled-components'


function Header() {

   const list = [
      {name: 'Pacotes', imageLink: 'https://www.uniara.com.br/cursos/presencial/graduacao/estetica-e-cosmetica/_assets/img/estagio-supervisionado-uniara.png'},
      {name: 'Depoimentos', imageLink: 'https://w7.pngwing.com/pngs/679/789/png-transparent-computer-icons-loyalty-icon-design-customer-retention-rectangle-heart-black.png'},
      {name: 'Contatos', imageLink: 'https://cdn-icons-png.flaticon.com/512/126/126341.png'}   
   ]
  
  return (
    <Nav>
        <Logo src='/images/logo.png' alt='logo'/>
        <Titulo> FM Estética </Titulo>
        <NavMenu>
           {list.map((item)=>
               <Links href='/'>    
               <img src={item.imageLink}/>
               <span>{item.name}</span>    
                {/* <a href=''>Pacotes</a>
                <a href=''>Depoimentos</a>
                <a href=''>Contatos</a> */}
            </Links>
           )}
           
        </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
   display: flex;
   flex-direction: row;
   padding-top: 40px ;
   padding-bottom: 40px ;
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
   justify-content: center;
   }
`

const Logo = styled.img`
   width: 180px; 

   
`

const Titulo = styled.h1`
   font-family: Habibi;
   font-size: 90px;

  
   
   @media(max-width: 500px) {
      font-size: 60px;
   }
`

const NavMenu = styled.div`
   font-family: Habibi;
   font-size: 30px;
   display: flex;
   
   a{
      display: flex;
       align-items:center;
       padding: 0 12px;
       cursor: pointer;
       text-decoration: none;
       color: black;
       
       
       
       /* margin-left: 30px;
       text-decoration: none;
       
       color: black;
       
      

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
          justify-content: center; */
   /* } */

   img {
      height: 30px;
      margin-right: 10px;

   span {
      font-size:13px;
      letter-spacing: 1.42px;
      position: relative;
   }
   }


}

   span:hover{
      color: #A80505;
      transition: 0.7s;
      opacity: 0.7;
   }


 

`

const Links = styled.a`
     
   `

