import Image from 'next/image'
import { Loader } from '../loader'

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

const BackdropPlaceholder = () => {
  return (
    <div className="relative w-full h-[70vh] max-h-[650px] rounded-3xl bg-dark-800/80 overflow-hidden">
      <Loader />
    </div>
  )
}

export { Backdrop, BackdropPlaceholder }
