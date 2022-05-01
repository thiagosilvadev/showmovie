import * as S from './style'

export type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => <S.Wrapper>{children}</S.Wrapper>

export default Button
