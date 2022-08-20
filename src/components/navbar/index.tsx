import Image from 'next/image'
import { Container } from '../container'
import * as S from './styles'

export const Header = () => (
  <S.Wrapper>
    <Container>
      <Image src="/logo.svg" alt="" width={120} height={50} />
      <S.List>
        <S.Link href="/">Home</S.Link>
        <S.Link href="/">Filmes</S.Link>
        <S.Link href="/">Séries</S.Link>
      </S.List>
    </Container>
  </S.Wrapper>
)
