import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../container'
import * as S from './styles'

export const Navbar = () => (
  <S.Wrapper>
    <Container>
      <Image src="/logo.svg" alt="" width={120} height={50} />
      <S.List>
        <Link href="/" passHref>
          <S.Link>Home</S.Link>
        </Link>
        {/* <S.Link href="/">Filmes</S.Link>
        <S.Link href="/">Séries</S.Link> */}
      </S.List>
    </Container>
  </S.Wrapper>
)
