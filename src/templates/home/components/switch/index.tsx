import * as S from './styles'

type SwitchProps = {
  items: {
    label: any
    value: any
  }[]
  value: any
  onChange: (value: any) => void
}

export const Switch = ({ value, onChange, items }: SwitchProps) => {
  if (!items || items.length === 0) throw new Error('items cannot be empty')

  const getActiveIndex = () => items.findIndex((item) => item.value === value)
  return (
    <S.Switch>
      <S.Wrapper activeIndex={getActiveIndex()} totalItems={items.length}>
        {items.map((item) => (
          <S.SwitchItem
            active={value === item.value}
            key={item.value}
            onClick={() => onChange(item.value)}
            onFocus={() => onChange(item.value)}
          >
            {item.label}
          </S.SwitchItem>
        ))}
      </S.Wrapper>
    </S.Switch>
  )
}
