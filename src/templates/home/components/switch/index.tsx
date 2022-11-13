import classNames from 'classnames'

type SwitchProps = {
  items: {
    label: any
    value: any
  }[]
  value: any
  onChange: (value: any) => void
}

export const Switch = ({ value, onChange, items }: SwitchProps) => {
  return (
    <div className="relative p-2 rounded-lg w-fit bg-black/10">
      <div className="grid grid-cols-3">
        {items.map((item) => (
          <button
            className={classNames(
              'rounded-md font-semibold font-secondary font-base transition-all cursor-pointer bg-none active:bg-primary-600 px-8 py-2 text-dark-300',
              {
                'bg-primary-600 text-primary-50': value === item.value
              }
            )}
            key={item.value}
            onClick={() => onChange(item.value)}
            onFocus={() => onChange(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
