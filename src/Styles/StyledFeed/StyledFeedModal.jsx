import styled from "styled-components"

const StyledFeedModal = styled.div`
  position: fixed;
  display: flex;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  padding: 1.2rem 1.4rem 1.2rem 1.4rem;

  @media (max-width: 40rem) {
    /* & {
      padding: 3.2rem 3.2rem 3.2rem 3.2rem;
    } */
  }
`

export default StyledFeedModal
