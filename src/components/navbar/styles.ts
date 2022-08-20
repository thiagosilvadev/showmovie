import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacing.xsmall} 0;

    > * {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    img {
      width: 12rem;
    }
  `}
`

export const List = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.size.small};
    font-weight: 700;
    text-decoration: none;
  `}
`
