import styled from "styled-components"

export const StyledLoginForm = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  h1 {
    font-size: 4.8rem;
    font-family: var(--type-second);
    margin: 1.6rem 0;
    position: relative;

    &::before {
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

  h2 {
    font-size: 3.2rem;
    font-family: var(--type-second);
  }

  img {
    object-fit: cover;
    height: 100vh;
    width: 100%;
  }

  .login-content {
    flex-direction: column;
    max-width: 60rem;
    padding: 0 4.8rem;
    .perdeu {
      font-size: 1.6rem;
      color: #666;
      display: inline-flex;
      flex-direction: column;
      margin: 3.2rem 0;

      &::after {
        align-self: center;
        content: "";
        height: 0.2rem;
        width: 10%;
        display: block;
        background-color: #666;
        transition: 0.2s ease width;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .login {
  }

  .criar {
    p {
      margin: 3.2rem 0;
      font-size: 1.6rem;
    }

    h2 {
      position: relative;
      display: inline-block;
    }

    h2::after {
      content: "";
      display: block;
      position: absolute;
      width: 30%;
      height: 0.8rem;
      border-radius: 0.8rem;
      background-color: #ddd;
    }
  }
`
