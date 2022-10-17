import Image from 'next/image'
import Link from 'next/link'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(1.2rem);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 2.4rem;
  padding: 1.2rem;
  gap: 1.6rem;

  max-width: 80%;

  color: #fff;
  text-decoration: none;
`

const Poster = styled(Image)`
  border-radius: 1.3rem;
  position: relative;
`

const Heading = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 1.3;
    letter-spacing: -0.015em;
    margin-bottom: 0.8rem;
  `}
`
const SubHeading = styled.h5`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primary};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: -0.015em;
  `}
`

const Overview = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-top: 2.4rem;
  `}
`

const ContentArea = styled.div`
  padding: 1.6rem 0;
`

type SeasonProps = {
  id: number
  tvshow_id: number
  name: string
  year: string
  episode_count: number
  poster: string
  overview: string
}

const Season = (props: SeasonProps) => {
  return (
    <Link href={`${props.tvshow_id}/seasons`} passHref>
      <Wrapper>
        <div style={{ position: 'relative' }}>
          <Poster
            src={`http://image.tmdb.org/t/p/w342${props.poster}`}
            width={160}
            height={240}
            objectFit="cover"
            // layout="fill"
          />
        </div>
        <ContentArea>
          <Heading>{props.name}</Heading>
          <SubHeading>
            {props.year} | {props.episode_count} episódio
            {props.episode_count > 1 && 's'}
          </SubHeading>
          <Overview>{props.overview}</Overview>
        </ContentArea>
      </Wrapper>
    </Link>
  )
}

export { Season }
