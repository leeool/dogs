import React from "react"
import styled from "styled-components"

const StyledImage = styled.div`
  display: grid;

  .skeleton {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
  }

  img {
    grid-area: 1/1;
    display: block;
    max-width: 100%;
    opacity: ${({ load }) => load};
    transition: 1s ease opacity;
  }

  @keyframes skeleton {
    from {
      background-position: 0%;
    }
    to {
      background-position: -200%;
    }
  }
`

const Image = ({ src, alt }) => {
  const [load, setLoad] = React.useState(0)
  const [skeleton, setSkeleton] = React.useState(true)

  const handleLoad = () => {
    setLoad(1)
    setSkeleton(false)
  }

  return (
    <StyledImage load={load}>
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} src={src} alt={alt} />
    </StyledImage>
  )
}

export default Image
