import styled, { css } from 'styled-components'
type SwitchProps = {
  totalItems: number
  activeIndex: number
}

export const Wrapper = styled.div<SwitchProps>`
  ${({ theme, totalItems, activeIndex }) => css`
    display: grid;
    grid-template-columns: repeat(${totalItems}, 1fr);
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: calc(((100% / ${totalItems}) * ${activeIndex}));
      background-color: black;
      width: calc((100%) / ${totalItems});
      height: calc(100%);
      background-color: ${theme.colors.primary[500]};
      z-index: ${theme.layers.base};
      transition: all 550ms ease;
      border-radius: 0.8rem;
    }
  `}
`
export const Switch = styled.div`
  width: fit-content;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.8rem;
  border-radius: 1.2rem;
`
type SwitchItemProps = {
  active: boolean
}

export const SwitchItem = styled.button<SwitchItemProps>`
  ${({ theme, active }) => css`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0.8rem 3.2rem;
    color: ${theme.colors.dark[300]};
    font-family: ${theme.font.family.secondary};
    font-weight: 600;
    font-size: 1.6rem;
    letter-spacing: 0.02em;
    transition: all 250ms ease;
    z-index: ${theme.layers.menu};
    ${active &&
    css`
      color: ${theme.colors.primary[50]};
    `}
  `}
`
