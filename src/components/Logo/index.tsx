import * as S from './styles'
import logoVersions from './logoVersions'

export type LogoProps = {
  variant?: keyof typeof logoVersions
}
const Logo = ({ variant = 'vertical' }: LogoProps) => (
  <S.Wrapper>{logoVersions[variant]()}</S.Wrapper>
)

export default Logo
