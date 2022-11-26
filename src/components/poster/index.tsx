import classNames from 'classnames'
import NextImage from 'next/image'

type PosterProps = {
  title: string
  src: string
  alt: string
  sticky?: boolean
}

const Poster = ({ title, src, alt, sticky }: PosterProps) => {
  return (
    <div className="relative h-full">
      <div className="absolute flex justify-start p-10 mb-6 text-white min-w-[100%] w-min rounded-3xl -top-28 -translate-y-2/4 align-center bg-dark-800/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold truncate">{title}</h2>
      </div>
      <div
        className={classNames({
          'sticky top-6': sticky
        })}
      >
        <NextImage
          className="object-cover rounded-3xl"
          src={src}
          alt={alt!}
          width={486}
          height={730}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Poster
