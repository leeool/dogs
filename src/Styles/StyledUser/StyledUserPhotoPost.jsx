import styled from "styled-components"

const StyledUserPhotoPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }

  .preview {
    display: flex;
    border-radius: 1.6rem;
    width: 100%;
    align-self: start;
  }
`

export default StyledUserPhotoPost
