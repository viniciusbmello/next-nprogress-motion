import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6rem;

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};

  #header-content {
    max-width: 120rem;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul,
  li {
    display: inline;
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
  }

  ul li {
    width: 10rem;
  }

  a {
    margin: auto;
    font: 400 1.4rem sans-serif;
    text-decoration: none;
    padding: 0 1rem;
    color: ${(props) => props.theme.colors.background};
    transition: color 0.2s;
  }

  a :hover {
    color: ${(props) => props.theme.colors.secundary};
  }

  .active a {
    font: 700 1.4rem sans-serif;
    color: ${(props) => props.theme.colors.secundary};
  }

  h1 {
    color: ${(props) => props.theme.colors.secundary};
  }
`

export default Container
