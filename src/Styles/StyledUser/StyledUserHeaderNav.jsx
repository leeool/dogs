import styled from "styled-components"

const StyledUserHeader = styled.div`
  position: relative;

  .nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    align-items: center;
  }

  .nav .active {
    box-shadow: 0 0 0 0.3rem #fea;
    background-color: #fff;
    border: 1px solid #fb1;

    path,
    rect {
      fill: #fb1;
    }
  }

  .nav a,
  .nav .sair {
    display: flex;
    background-color: #eee;
    padding: 0.5rem;
    border-radius: 0.4rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s ease border, background, shadow;
    align-items: center;

    &:not(.active):hover {
      box-shadow: 0 0 0 0.3rem #eee;
      background-color: #fff;
      border: 1px solid #212121;
    }
  }

  .mobile-button {
    display: flex;
    place-content: center;
    background-color: #eee;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    border-radius: 0.4rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.2s ease border, background, shadow;
    align-items: center;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 0.3rem #eee;
      color: #fb1;
      border: 1px solid #fb1;
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: currentColor;
      border-radius: 2px;
      box-shadow: 0 -6px currentColor, 0 6px currentColor;
      transition: 0.2s ease all;
    }
  }

  .mobile-active::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 -8px currentColor, 0 8px currentColor;
  }

  .nav-mobile {
    position: absolute;
    right: 0;
    opacity: 0;
    padding: 0 0.8rem;
    border-radius: 4px;
    background-color: #fff;
    pointer-events: none;
    transition: 0.3s ease all;
    translate: 3rem;
  }

  .mobile-active + .nav-mobile {
    display: block;
    position: absolute;
    opacity: 1;
    pointer-events: all;
    translate: initial;
    z-index: 100;
  }

  .nav-mobile > * {
    display: flex;
    background-color: #fff;
    padding: 0.5rem;
    cursor: pointer;
    align-items: center;
    width: 100%;
    display: flex;
    gap: 0 1rem;
    align-items: center;
    border-bottom: 1px #eee solid;
    font-size: 1.6rem;

    &:hover path,
    &:hover rect {
      fill: #fb1;
    }
  }
`

export default StyledUserHeader
