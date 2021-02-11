import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6rem;

  display: flex;
  align-items: center;

  z-index: 998;

  nav {
    height: 100%;
    max-width: 120rem;
    margin: auto;
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
  }

  a {
    font: 400 1.4rem sans-serif;
    color: white;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 4rem;
    transition: all 0.2s linear;
  }

  .active a {
    font-weight: 700;
  }

  a:not(.active):hover .link-space {
    transform: translateZ(-1.5rem) rotateX(90deg);
  }

  .link-space {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    pointer-events: none;
    transition: all 0.2s ease-out;
    transform-style: preserve-3d;
  }

  .fare {
    transform: rotateX(0deg) translateZ(1.5rem);
  }

  .back {
    transform: rotateX(-90deg) translateZ(1.5rem);
  }

  .fare,
  .back {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    box-sizing: border-box;
    margin: auto;
    padding: 1rem 2rem;
  }

  nav li a:hover {
    font-weight: 700;
  }
`

export default Container
