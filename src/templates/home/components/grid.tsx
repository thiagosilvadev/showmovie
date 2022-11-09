import classNames from 'classnames'

type WrapperProps = React.HTMLAttributes<HTMLDivElement>
export const Wrapper = ({ children, className, ...rest }: WrapperProps) => {
  return (
    <div
      {...rest}
      className={classNames(
        'grid md:grid-cols-4 gap-5 mt-6 grid-cols-2',
        className
      )}
    >
      {children}
    </div>
  )
}
