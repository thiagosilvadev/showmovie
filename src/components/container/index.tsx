import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.container.width};
    width: 100%;
    margin: 0 auto;
    padding: 0 calc(${theme.container.gutter} / 2);
  `}
`
