import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: var(--light);
  }

  body {
    -webkit-font-smoothhhing: antialiased !important;
  }

  body, input, button {
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  :root {
    --red: #d82f43;
    --green: #0C8990;
    --black: #000000;
    --gray: #959595;
    --light: #E5E5E5;
    --white: #FFFFFF;
  }

  .primary-button {
    text-decoration: none;
    padding: 0.8rem 2.2rem;
    display: inline-block;
    position: relative;
    border-radius: 23px;
    border: none;
    background: var(--green);
    color: var(--white);
    transition: filter 0.2s;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#0C8990')}
    }
  }

  .secondary-button {
    text-decoration: none;
    padding: 0.8rem 2.2rem;
    display: inline-block;
    position: relative;
    border-radius: 23px;
    border: none;
    background: var(--black);
    color: var(--white);
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#2a2a2a')}
    }
  }
`;
