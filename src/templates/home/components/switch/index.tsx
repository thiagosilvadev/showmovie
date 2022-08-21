import * as S from './styles'

type SwitchProps = {
  value: string
}

export const Switch = ({ value }: SwitchProps) => {
  return (
    <S.Switch>
      <S.SwitchItem>Todos</S.SwitchItem>
      <S.SwitchItem>Filmes</S.SwitchItem>
      <S.SwitchItem>Séries</S.SwitchItem>
    </S.Switch>
  )
}
