import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --brand-font: 'Georgia', serif;
  --main-font: 'Helvetica', sans-serif;
}

html {
  height: 100%;
  width: 100%;
  overflow: auto;
}

body {
  margin: 0;
  padding: 0;
}

body {
    font-family: var(--main-font);
    font-size: 18px;
    color: ${({theme}) => theme.foregroundPrimary};
    background: ${({theme}) => theme.background};
  }
  
  h1 {
    color: ${({theme}) => theme.foregroundPrimary};
    font-family: var(--brand-font);
  }

  h4 {
    font-size: 20px;
    opacity: 75%;
  }
  
  a {
    color: ${({theme}) => theme.foregroundAccent};
    transition: all 200ms ease;
  }
  
  a:hover,
  a:active {
    text-decoration: none;
    color: ${({theme}) => theme.foregroundShade};
  }

  .content {
    color: ${({theme}) => theme.foregroundPrimary};
    background: ${({theme}) => theme.background};
    width: calc(100% - 10vmin);
    margin: 0 auto;
    height: 100%;
    padding: 1vmin 0;
  }

  hr {
    display: block; height: 1px;
    border: 0; border-top: 1px solid ${({theme}) => theme.foregroundTertiary};
    margin: 1em 0; padding: 0
  }

  .center {
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid ${({theme}) => theme.foregroundTertiary};
  }

  .card > Img {
      object-fit: contain;
  }

  Col {
    margin-bottom: 2rem;
  }

  .foreground {
    color: ${({theme}) => theme.foregroundPrimary};
  }

  .accent {
    color: ${({theme}) => theme.foregroundAccent};
  }
`;
