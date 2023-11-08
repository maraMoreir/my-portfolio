import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;700&display=swap');

  :root {
    font-size: 64.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    color: #333333;
    -webkit-font-smoothing: antialiased;
  }

  button div a {
    outline: none;
  }

  p {
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: 2.5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background-color: rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.04);
  }
  .ant-picker-range {
    height: 36px;
  }
`;

export default GlobalStyle;
