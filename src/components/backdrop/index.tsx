import Image from 'next/image'

type BackdropProps = {
  src: string
  alt: string
}

const Backdrop = ({ src, alt }: BackdropProps) => {
  return (
    <div className="relative w-full h-[70vh] max-h-[650px]">
      <Image className="object-cover rounded-3xl" src={src} alt={alt} fill />
    </div>
  )
}

export { Backdrop }
