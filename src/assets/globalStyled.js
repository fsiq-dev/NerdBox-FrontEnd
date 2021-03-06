import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline: 0;
    font-family:'Segoe UI';
  }
  
  #root{
    display:flex; 
    flex-direction:column;
    height:100vh;
  }
`

export default GlobalStyle;