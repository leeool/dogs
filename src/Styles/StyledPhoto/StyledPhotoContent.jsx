import styled from "styled-components"

const StyledPhotoContent = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 57.8rem 32rem;
  background-color: #fff;
  border-radius: 0.8rem;
  overflow: hidden;
  font-size: 1.8rem;

  @media (max-width: 1000px) {
    & {
      height: 100%;
      grid-template-columns: 54.8rem;
      overflow-y: scroll;
    }
  }

  .content {
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 2rem;
  }

  h1 {
    z-index: 1;
  }

  .post-info {
    display: flex;
    justify-content: space-between;

    .author {
      color: #999;

      &:hover {
        text-decoration: underline;
      }
    }

    .acessos {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #999;

      circle,
      path {
        stroke: #999;
      }
    }

    .delete {
      padding: 0.6rem 1.2rem;
      font-size: 1.4rem;
      border-radius: 0.4rem;
      color: #999;
      cursor: pointer;
      border: 1px solid transparent;

      &:hover {
        background-color: #fff;
        border: 1px solid #000;
      }
    }
  }

  .dog-info {
    display: flex;
    gap: 2.5rem;
    font-weight: bold;

    p::before {
      content: "|";
      display: inline-block;
      margin-right: 1rem;
    }
  }

  .comments {
    margin: 3.2rem 0;
  }
`

export default StyledPhotoContent
