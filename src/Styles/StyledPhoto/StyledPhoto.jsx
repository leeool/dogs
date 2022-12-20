import styled from "styled-components"

const StyledPhoto = styled.div`
  padding-top: 8.4rem;

  & > div {
    grid-template-columns: 1fr;
    overflow: visible;
  }

  img {
    border-radius: 0.8rem;
  }

  ul {
    min-height: auto;
    max-height: auto;
  }

  .content {
    padding: 2rem 0;
  }
`

export default StyledPhoto
