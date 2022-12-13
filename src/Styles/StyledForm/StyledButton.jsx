import styled from "styled-components"

export const StyledButton = styled.button`
  font-size: 1.6rem;
  padding: 1.3rem 1.9rem;
  color: #764701;
  background-color: #fb1;
  border-radius: 0.4rem;
  min-width: 12.8rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: wait;
  }
`
