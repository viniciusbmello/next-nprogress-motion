import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: 0.6rem;
  z-index: 1;

  #header-content {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    max-width: 120rem;
  }

  a {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.background};
    transform: scale(1, 0.9);
  }

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.secundary};
    text-align: left;
  }

  ul li {
    display: inline;
    list-style: none;
  }
  .active a {
    color: ${(props) => props.theme.colors.secundary};
  }
`

export default Container
