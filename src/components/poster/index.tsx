import NextImage from 'next/image'

type PosterProps = {
  title: string
  src: string
  alt?: string
}

const Poster = ({ title, src, alt }: PosterProps) => {
  return (
    <div className="relative h-[750px]">
      <div className="absolute flex justify-start p-10 mb-6 text-white min-w-[100%] w-min rounded-3xl -top-28 -translate-y-2/4 align-center bg-dark-800/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold truncate">{title}</h2>
      </div>
      <NextImage
        className="rounded-3xl"
        src={src}
        alt={alt}
        width={486}
        height={730}
        objectFit="cover"
      />
    </div>
  )
}

export default Poster
