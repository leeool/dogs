import styled from "styled-components"

const StyledFeedPhotos = styled.div`
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.6rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 40rem) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default StyledFeedPhotos
