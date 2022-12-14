import styled from "styled-components"

export const StyledInput = styled.div`
  margin-bottom: 1.6rem;
  position: relative;

  p {
    margin: 1rem 0.3rem;
    font-size: 1.4rem;
    color: #ff6146;
  }

  input {
    width: 100%;
    background-color: #eee;
    border-radius: 5px;
    padding: 1.3rem;
    font-size: 1.6rem;
    transition: 0.2s ease;
    box-shadow: transparent;
  }

  input:focus,
  input:hover {
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  label {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }

  .wrap {
    position: relative;
  }

  .wrap svg {
    position: absolute;
    right: 0;
    bottom: 0;
    scale: 0.6;
    z-index: 100;
    cursor: pointer;
  }
`
