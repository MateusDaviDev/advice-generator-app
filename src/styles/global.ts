import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
  }
  body {
    background-color: ${({theme})=>theme["Dark-Blue"]};
    -webkit-font-smoothing: antialiased;
  font-family: 'Manrope', sans-serif;

  

    
   
  }
  
  .flex{
      display: flex;    
        justify-content: center;
        margin: auto 0;

   
}
`;