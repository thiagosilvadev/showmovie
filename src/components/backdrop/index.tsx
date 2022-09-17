import Image from 'next/image'
import styled from 'styled-components'

type BackdropProps = {
  src: string
  alt?: string
}
const Wrapper = styled.div`
  position: relative;
`

const ImageWrapper = styled(Image)`
  border-radius: 2.4rem;
`

const Backdrop = ({ src, alt }: BackdropProps) => {
  return (
    <Wrapper>
      <ImageWrapper
        src={src}
        alt={alt}
        width={1200}
        height={480}
        layout="responsive"
        objectFit="cover"
      />
    </Wrapper>
  )
}

export { Backdrop }
