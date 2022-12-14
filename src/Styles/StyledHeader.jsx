import styled from "styled-components"
import usuario from "../Assets/usuario.svg"

export const StyledHeader = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${({ theme }) => theme["max-width"]};
    margin: ${({ theme }) => theme.margin};
    font-size: 1.6rem;
    padding: ${({ theme }) => theme.padding};
    height: 6.4rem;
  }

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0.1rem 0.1rem;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 100;
  top: 0;

  .login {
    display: flex;
    /* align-items: center; */
    gap: 0 0.5rem;
  }

  /* .login::after {
    content: "";
    background: url("../Assets/usuario.svg") no-repeat center center;
    width: 1.5rem;
    height: 1.7rem;
    display: inline-block;
    position: relative;
    top: -1px;
  } */
`
