import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #F2F3F4;
  --dark-blue:#154360;
  --blue: #1F618D;
  --light-blue:#5DADE2;
  --card-background:#2A4E73;
  --text-light-blue: #d4e6f1;
}
    * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  //medidas em % para evitar erros de incompatibilidade com ferramentas para aumento da fonte
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media (max-width: 720px){
    font-size: 87.5%;
  }
  // REM será usado como medida para o app, o rem é baseado no tamanho da fonte do usuário
}
body {
  height: 100vh;
  background: linear-gradient(-80deg, var(--light-blue), var(--dark-blue));
  //em navegadores baseados no chrome o 'antialiased' torna as fontes mais nítidas
  -webkit-font-smoothing: antialiased;
}
//elementos que não recebem a font vinda do body
body, input, textarea, button {
  font-family: Arial, Helvetica, sans-serif;
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight: 600;
}
button {
  cursor: pointer;
}
[disabled]{
  opacity: 0.6;
  //cursor de bloqueio
  cursor: not-allowed;
}
a{
  text-decoration: none;
}
`;
