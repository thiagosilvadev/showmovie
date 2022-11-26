import Image from 'next/image'

type BackdropProps = {
  src: string
  alt: string
}

const Backdrop = ({ src, alt }: BackdropProps) => {
  return (
    <div className="relative w-full h-[70vh] max-h-[650px]">
      <Image
        className="object-cover rounded-3xl"
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNU0LA7AwACSgFUIVqaPAAAAABJRU5ErkJggg=='
        }
      />
    </div>
  )
}

export { Backdrop }
