import styled from "styled-components"

const StyledUserStatsGraph = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 2.8rem;
  margin-top: 5rem;
  gap: 3.2rem;

  .acessos {
    padding: 1.6rem;
    grid-column: 1 /-1;
    border-radius: 0.4rem;
    box-shadow: 0 10px 20px #3333331c;
  }

  .graph-item {
    box-shadow: 0 10px 20px #3333331c;
    border-radius: 0.4rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }
`

export default StyledUserStatsGraph
