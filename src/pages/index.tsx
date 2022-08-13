import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.size.huge};
    background-color: ${theme.colors.dark[900]};
    color: ${theme.colors.white};
  `};
`

const Home = () => {
  return <Container>Hello</Container>
}

export default Home
