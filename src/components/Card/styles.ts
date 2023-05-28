import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme})=>theme["Dark-Grayish-Blue"]};
  width: 33.75rem;
  height: 21rem;
  border-radius:1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  position: relative;

  .separator{
    width: 80%;
  }

  .icon-dice{
    background-color: ${({theme})=>theme["Neon-Green"]};
    /* margin-bottom:5rem ; */
    top: calc(100% - 2rem);
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;


    &:hover{
      box-shadow: 0px 0px 40px #53FFAA;
      transition: .5s;
      cursor: pointer;
  }
  }

  span{
    color: ${({theme})=>theme["Neon-Green"]};
    font-weight: bold;
    font-size: .875rem;
    line-height: 1.2rem;
    letter-spacing: .20rem
  }
  
  @media (max-width: 650px) {
    width: 90%;
    height: 55%;
   
  }
`

export const ContainerGeral = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;


`

export const Message = styled.p`
  font-size: 1.75rem;
  text-align: center;
  color: ${({theme})=>theme["Light-Cyan"]};
  line-height: 2.375rem;
  letter-spacing: -0.3px;
  
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
`


