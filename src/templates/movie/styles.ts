import Image from 'next/image'
import { Container as BaseContainer } from '@/components/container'
import styled, { css } from 'styled-components'

export const Container = styled(BaseContainer)``

export const InfoWrapper = styled.div`
  padding-top: 10rem;
  padding-left: calc(2.5rem);
  gap: 4.8rem;
  color: #fff;
  display: grid;
  grid-template-columns: 30% 1fr;
  align-items: start;
`

export const Poster = styled(Image)`
  border-radius: 2.5rem;
`

export const DetailWrapper = styled.div``

export const Tagline = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: ${theme.colors.primary[100]};
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  `}
`

export const Bio = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    width: 80%;
    color: ${theme.colors.dark[100]};
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    margin-bottom: 4.8rem;
  `}
`

export const Detail = styled.div`
  padding: 1.2rem 0;
`

export const DetailTitle = styled.h4`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.primary[100]};
    font-weight: 700;
    letter-spacing: -0.015em;
    line-height: 1.5;
  `}
`

export const DetailContent = styled.h5`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-family: ${theme.font.family.secondary};
    color: ${theme.colors.dark[50]};
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.5;
  `}
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(12px);
  width: 100%;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 2.4rem;
  margin-bottom: 2.4rem;
  position: absolute;
  top: -10rem;
  left: 0;
  z-index: 999;
  transform: translateY(-50%);
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.1;
  color: #fff;
`
export const PosterWrapper = styled.div`
  /* margin-top: -10rem; */
  /* width: 30%; */
  position: sticky;
  top: 15rem;
  align-self: start;
  height: 750px;
`
