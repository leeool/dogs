import { createGlobalStyle } from "styled-components"

const StyledGlobal = createGlobalStyle`
  :root{
    font-size: 10px;
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: "Spectral", Georgia;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    border: none;
    color: #333;
    font-family: var(--type-first)
  }

  a{
    color: inherit
  }

  img{
    display: block;
    max-width: 100%
  }

  button, input{
    display: block;
    font-size: 1rem;
  }

  body{
    padding-top: 6.4rem
  }

  .form-container{
    max-width: 55rem;
    padding: 0 5rem;
    margin-top: 20rem;

  }

  .main-title{
    font-size: 4.8rem;
    font-family: var(--type-second);
    margin: 1.6rem 0;
    position: relative;

    &::after{
      content: "";
      display: block;
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      background-color: #fb1;
      border-radius: 0.4rem;
      z-index: -1;
      bottom: 0.8rem;
      left: -0.5rem;
    }
  }

`
export default StyledGlobal
