import styled from "styled-components"

const StyledPhotoComments = styled.div`
  margin-top: 3.2rem;
  display: grid;
  grid-template-rows: auto auto;

  ul {
    min-height: 25rem;
    max-height: 25rem;
    overflow-y: auto;

    li {
      word-break: break-all;
      line-height: 1.2;
    }

    li + li {
      margin-top: 1rem;
    }
  }
`

export default StyledPhotoComments
