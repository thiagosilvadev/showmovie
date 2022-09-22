import NextImage from 'next/image'
import styled from 'styled-components'
import { Loader } from '../loader'

export const Wrapper = styled.div`
  position: relative;
  height: 750px;
`
const TitleBox = styled.div`
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
const TitleContent = styled.h2`
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.1;
  color: #fff;
`

const TitlePlaceholder = styled.div`
  width: 60%;
  height: 1.6rem;
  background: #20283e;
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;
`

export const Image = styled(NextImage)`
  border-radius: 2.5rem;
`

const ImagePlaceholder = styled.div`
  /* width: 486px; */
  /* height: 730px; */
  width: 100%;
  height: 500px;
  background: #20283e;
  border-radius: 2.5rem;
  position: relative;
`

type PosterProps = {
  title: string
  src?: string
  alt?: string
  placeholder?: boolean
}

const Poster = ({ title, src, alt, placeholder }: PosterProps) => {
  return (
    <Wrapper>
      <TitleBox>
        {placeholder ? (
          <TitlePlaceholder>
            <Loader />
          </TitlePlaceholder>
        ) : (
          <TitleContent>{title}</TitleContent>
        )}
      </TitleBox>
      {src && !placeholder ? (
        <Image src={src} alt={alt} width={486} height={730} objectFit="cover" />
      ) : (
        <ImagePlaceholder />
      )}
    </Wrapper>
  )
}

export default Poster
