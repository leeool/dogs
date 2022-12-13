import styled from "styled-components"

const Container = styled.div`
  margin: ${({ theme }) => theme.margin};
  max-width: ${({ theme }) => theme["max-width"]};
`

export default Container
