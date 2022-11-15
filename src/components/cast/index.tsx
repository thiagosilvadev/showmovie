import classNames from 'classnames'
import Image, { ImageProps } from 'next/image'
import { HTMLAttributes } from 'react'
import styles from './styles.module.css'

export const Title = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      {...props}
      className={classNames(
        'text-4xl font-bold tracking-tighter text-white',
        className
      )}
    >
      {children}
    </h3>
  )
}

export const List = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        'mt-5 pb-5 flex gap-3 basis-44 flex-grow flex-shrink-0 overflow-auto relative',
        styles.list,
        className
      )}
    >
      {children}
    </div>
  )
}
export const Wrapper = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        'p-3 pb-4 bg-dark-800/80 backdrop-blur-md flex flex-col w-44 rounded-2xl flex-shrink-0',
        className
      )}
    >
      {children}
    </div>
  )
}

export const Avatar = ({ className, ...props }: ImageProps) => {
  return <Image {...props} className={classNames('rounded-xl', className)} />
}

export const Name = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5
      {...props}
      className={classNames(
        'font-secondary font-semibold text-sm text-white mt-3 mb-1 ',
        className
      )}
    >
      {children}
    </h5>
  )
}

export const Character = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h6
      {...props}
      className={classNames(
        'font-secondary font-normal text-xs text-white',
        className
      )}
    >
      {children}
    </h6>
  )
}

type ItemProps = {
  avatar?: string
  name: string
  character: string
}

const Item = ({ name, avatar, character }: ItemProps) => {
  return (
    <Wrapper>
      <Avatar
        width={170}
        height={220}
        src={`http://image.tmdb.org/t/p/w185${avatar}`}
        alt={name}
        className="object-cover"
      />
      <Name>{name}</Name>
      <Character>{character}</Character>
    </Wrapper>
  )
}

const Cast = {
  Title,
  Item,
  List
}

export default Cast
