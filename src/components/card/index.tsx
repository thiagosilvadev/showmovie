import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Loader } from '../loader'
import * as S from './styles'

export type CardProps = {
  title: string
  link?: string
  rating?: number
  poster?: string | null
}

type LinkWrapperProps = {
  children: React.ReactNode
  link?: string
}

const LinkWrapper = ({ children, link }: LinkWrapperProps) => {
  return link ? (
    <Link href={link} passHref>
      <a style={{ textDecoration: 'none' }}> {children}</a>
    </Link>
  ) : (
    <>{children}</>
  )
}

const Card = ({ title, rating, poster, link }: CardProps) => {
  return (
    <LinkWrapper link={link}>
      <S.Wrapper>
        {poster ? (
          <Image src={poster} width={600} height={900} />
        ) : (
          <S.ImagePlaceholder />
        )}
        <S.Rating>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.15333 2.33999L10.3267 4.68666C10.4867 5.01333 10.9133 5.32666 11.2733 5.38666L13.4 5.73999C14.76 5.96666 15.08 6.95333 14.1 7.92666L12.4467 9.57999C12.1667 9.85999 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.85999 3.55333 9.57999L1.9 7.92666C0.926667 6.95333 1.24 5.96666 2.6 5.73999L4.72667 5.38666C5.08 5.32666 5.50667 5.01333 5.66667 4.68666L6.84 2.33999C7.48 1.06666 8.52 1.06666 9.15333 2.33999Z"
              stroke="#FFAD49"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{rating}</span>
        </S.Rating>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
    </LinkWrapper>
  )
}

const CardPlaceholder = () => (
  <S.WrapperPlaceholder>
    <S.ImagePlaceholder>
      <Loader />
    </S.ImagePlaceholder>
    <S.BadgePlaceholder />
    <S.TitlePlaceholder>
      <Loader />
    </S.TitlePlaceholder>
  </S.WrapperPlaceholder>
)

export { Card, CardPlaceholder }
