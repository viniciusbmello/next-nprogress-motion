import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: 0.6rem;

  a {
    font-size: 1.6rem;
    margin: 0 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.background};
  }
`

export default Container
