import styled from "styled-components"

export const StyledLogin = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img {
    object-fit: cover;
    height: 100vh;
    width: 100%;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    align-items: start;
    min-height: 100vh;

    img {
      display: none;
    }

    .form-container {
      margin-top: 0;
    }
  }
`
