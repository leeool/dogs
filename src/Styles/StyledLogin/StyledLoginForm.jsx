import styled from "styled-components"

export const StyledLoginForm = styled.section`
  h2 {
    font-size: 3.2rem;
    font-family: var(--type-second);
  }

  .login-content {
    .perdeu {
      font-size: 1.6rem;
      color: #666;
      display: inline-flex;
      flex-direction: column;
      margin: 2rem 0;

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
