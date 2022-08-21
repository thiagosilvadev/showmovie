import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 8rem;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.dark[50]};
    font-size: ${theme.font.size.huge};
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 1.6rem;
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: #c3c8d4;
    font-size: ${theme.font.size.medium};
    letter-spacing: -0.015em;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    color: ${theme.colors.dark[600]};
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: -0.015em;
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    transition: all 500ms ease;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #101626 50%);
    padding: 0 0.8rem;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    outline: none;
    border: 1px solid ${theme.colors.dark[700]};
    letter-spacing: -0.015em;
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 1.2rem 1.6rem;
    padding-top: 2.8rem;
    border-radius: 1.2rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    color: white;
    font-size: 1.6rem;
    transition: all 500ms ease;
    &::placeholder {
      color: #767e94;
      font-size: 1.6rem;
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 2rem 1.6rem;
    border-top-right-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
    border: 1px solid ${theme.colors.dark[700]};
    background: rgba(0, 0, 0, 0.1);
    border-left: 0;
    cursor: pointer;
    transition: all 500ms ease;
  `}
`

export const Form = styled.form`
  width: 100%;
  max-width: 80%;
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  margin-top: 2.4rem;
  height: 6.6rem;

  ${({ theme }) => css`
    &:focus-within {
      ${Label} {
        top: 0;
        transform: translateY(-50%);
        color: ${theme.colors.dark[100]};
        font-weight: 500;
      }

      ${Input}, ${Button} {
        border-color: ${theme.colors.primary[500]};
        padding: 2rem 1.6rem;
      }
    }
  `}
`
