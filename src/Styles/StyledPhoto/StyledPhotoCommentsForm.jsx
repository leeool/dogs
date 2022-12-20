import styled from "styled-components"

const StyledPhotoCommentsForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 3rem 0;
  gap: 0.8rem;

  textarea {
    background-color: #eee;
    padding: 1rem;
    resize: none;
    border-radius: 0.4rem;
    transition: 0.2s ease;
    width: 100%;
    display: block;

    &:hover,
    &:active {
      background-color: #fff;
      box-shadow: 0 0 0 2px #fea, 0 0 0 4px #fb1;
    }
  }

  button {
    display: block;
    background-color: #fff;
    cursor: pointer;
    place-self: center;
    padding: 1rem 1rem;

    &:hover path {
      fill: #fb1;
    }

    &:hover g {
      animation: latir 0.8s infinite;
    }
  }

  @keyframes latir {
    from {
      opacity: 0;
      translate: -0.8rem;
    }
    to {
      opacity: 1;
      translate: initial;
    }
  }
`

export default StyledPhotoCommentsForm
