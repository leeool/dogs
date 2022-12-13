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

`
export default StyledGlobal
