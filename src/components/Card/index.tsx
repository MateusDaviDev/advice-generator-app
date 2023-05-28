import React from 'react';
import { Container, ContainerGeral,Message } from './styles'
// import axios from "axios";
import { api } from '../../lib/axios';



interface Ipost{
  id:number ,
  advice:string 
}

export function Card() {

  const [post, setPost] = React.useState<Ipost | null>(null);
  // const [clickValue, setClickValue] = React.useState(0);

  async function GetMessageApi(){
    const response = await api.get("https://api.adviceslip.com/advice") 
    setPost(response.data.slip)


  }


  React.useEffect(() => {
    GetMessageApi()
  }, []);
  if (!post) return null;
  return (
  <ContainerGeral>
   <Container>
    <span>A d v i c e #{post.id}</span>
    <Message>"{post.advice}"</Message>
    <img src="src/assets/pattern-divider-desktop.svg" alt="" className='separator' />
    <div className='icon-dice' onClick={GetMessageApi}>
      <img src="src/assets/icon-dice.svg" alt=""/>
    </div>
   </Container>
   </ContainerGeral>
  )
}
