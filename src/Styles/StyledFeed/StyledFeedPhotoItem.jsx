import styled from "styled-components"

const StyledFeedPhotoItem = styled.li`
  display: grid;
  cursor: pointer;

  & > div {
    grid-area: 1 / 1;
  }

  img {
    border-radius: 0.4rem;

    &:hover {
      filter: brightness(0.5);
    }

    &:hover + span {
      display: inline;
    }
  }

  div:hover + span {
    display: inline;
  }

  span {
    grid-area: 1 / 1;
    place-self: center;
    color: white;
    z-index: 100;
    display: none;
    font-size: 1.6rem;
    position: relative;

    svg {
      margin-right: 0.5rem;
    }
  }

  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`

export default StyledFeedPhotoItem
