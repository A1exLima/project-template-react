import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    font-size: 1.6rem;
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    
    @media (max-width: 768px) {
      width: 4px;
      height: 4px;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-100']};
    border-radius: 5px;
  }
`
