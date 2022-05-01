import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary[500]};
    color: ${theme.colors.white[100]};
  `}
`
