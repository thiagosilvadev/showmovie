import Image from 'next/image'
import styled, { css } from 'styled-components'
import { Loader } from '../loader'

type BackdropProps = {
  src?: string
  alt?: string
  placeholder?: boolean
}
const Wrapper = styled.div`
  position: relative;
`

const ImageWrapper = styled(Image)`
  border-radius: 2.4rem;
`
type ImagePlaceholderProps = {
  animate?: boolean
}
const ImagePlaceholder = styled.div<ImagePlaceholderProps>`
  ${({ theme, animate }) => css`
    width: 100%;
    height: 48rem;
    background: ${theme.colors.dark[800]};
    border-radius: 2.4rem;
    backdrop-filter: blur(8px);
    opacity: 0.8;

    ${animate &&
    css`
      background: ${theme.colors.dark[800]};
      background-size: 900%;
      background-position: 100% 0%;
      position: relative;
      overflow: hidden;
    `}
  `}
`

const Backdrop = ({ src, alt, placeholder }: BackdropProps) => {
  return (
    <Wrapper>
      {!src || placeholder ? (
        <ImagePlaceholder animate={placeholder}>
          {placeholder && <Loader />}
        </ImagePlaceholder>
      ) : (
        <ImageWrapper
          src={src}
          alt={alt}
          width={1200}
          height={480}
          layout="responsive"
          objectFit="cover"
        />
      )}
    </Wrapper>
  )
}

export { Backdrop }
