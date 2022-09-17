import Image from 'next/image'
import styled, { css } from 'styled-components'

const Title = styled.h3`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  /* identical to box height, or 125% */

  letter-spacing: -0.02em;

  color: #ffffff;
`

const List = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-basis: 18.5rem;
  flex-shrink: 0;
  flex-grow: 1;
  overflow: auto;
  position: relative;

  /* width */
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.8rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(32, 40, 62, 0.2);
    border-radius: 100px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(32, 40, 62, 0.6);
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(32, 40, 62, 8);
  }
`

const Wrapper = styled.div`
  padding: 0.8rem 0.9rem;
  padding-bottom: 1.6rem;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  width: 18.5rem;
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 1.4rem;
  flex-shrink: 0;
`

const Avatar = styled(Image)`
  border-radius: 1rem;
`

const Name = styled.h5`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.14;
    color: #fff;
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
  `}
`

const Character = styled.h6`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.33;
    color: #fff;
  `}
`

type ItemProps = {
  avatar?: string
  name: string
  character: string
}

const Item = ({ name, avatar, character }: ItemProps) => {
  return (
    <Wrapper>
      <Avatar
        width={170}
        height={220}
        src={`http://image.tmdb.org/t/p/w185${avatar}`}
        objectFit="cover"
      />
      <Name>{name}</Name>
      <Character>{character}</Character>
    </Wrapper>
  )
}

const Cast = {
  Title,
  Item,
  List
}

export default Cast
