import Image from 'next/image'

type BackdropProps = {
  src: string
  alt?: string
}

const Backdrop = ({ src, alt }: BackdropProps) => {
  return (
    <Image
      className="rounded-3xl"
      src={src}
      alt={alt}
      width={1200}
      height={480}
      layout="responsive"
      objectFit="cover"
    />
  )
}

export { Backdrop }
