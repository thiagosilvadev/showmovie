import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    background: rgba(32, 40, 62, 0.8);
    position: relative;
    backdrop-filter: blur(80px);
    padding: 0.8rem;
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 1.2rem;

    padding-bottom: 2.4rem;

    img {
      width: 100%;
      object-fit: cover;
      height: 40rem;
      border-radius: 0.8rem;
    }
  `}
`
export const Rating = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
  color: #ffad49;
  display: flex;
  padding: 0.8rem;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: 1.6rem;
  `}
`

export const Title = styled.h4`
  margin-top: 1.6rem;
  margin-left: 1.6rem;
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.5;
  text-decoration: none;

  letter-spacing: -0.015em;

  /* Grey/50 */

  color: #ebeef5;
`

export const WrapperPlaceholder = styled(Wrapper)`
  ${({ theme }) => css`
    background: ${theme.colors.dark[900]};
  `}
`

export const ImagePlaceholder = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark[800]};
    background-size: 900%;
    background-position: 100% 0%;
    height: 48rem;
    border-radius: 0.8rem;
    position: relative;
    overflow: hidden;
  `}
`

export const TitlePlaceholder = styled.div`
  margin-top: 1.6rem;
  margin-left: 0.8rem;
  width: 150px;
  height: 16px;
  background: #20283e;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`

export const BadgePlaceholder = styled.div`
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
  display: flex;
  padding: 0.8rem;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  width: 6rem;
  height: 3.2rem;
`
