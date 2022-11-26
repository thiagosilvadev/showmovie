import Image from 'next/image'
import { Badge } from '../badge'
import { Loader } from '../loader'

type PlaceholderProps = {
  placeholder?: true
  episode?: never
}

type Episode = {
  name: string
  image_path: string
  rating: number
  seasonEpisode: string
  airDate: Date
  overview: string
}

type EpisodeProps =
  | PlaceholderProps
  | {
      placeholder?: never
      episode?: Episode
    }

export const Episode = ({ episode, placeholder }: EpisodeProps) => {
  if (placeholder || !episode) return <Skeleton />
  return (
    <div className="flex gap-4 p-4 rounded-3xl bg-dark-800/80 backdrop-blur-md">
      <div className="relative flex-shrink-0 w-80">
        <Image
          width={365}
          height={204}
          alt={episode.name}
          src={episode.image_path}
          className="object-cover rounded-2xl"
        />
        <Badge rating={episode.rating.toPrecision(2)} />
      </div>
      <div className="w-full">
        <span className="text-sm font-bold tracking-wider uppercase font-auxiliar text-primary-400 ">
          {episode.seasonEpisode}
        </span>
        <div className="flex items-center justify-between mt-2">
          <h4 className="text-2xl font-bold ">{episode.name}</h4>
          <span className="text-sm font-secondary text-primary-100">
            {episode.airDate.toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>
        <p className="mt-4 text-base leading-relaxed text-dark-100 font-secondary">
          {episode.overview}
        </p>
      </div>
    </div>
  )
}

const Skeleton = () => {
  return (
    <div className="relative flex gap-4 p-4 rounded-3xl bg-dark-800/80 backdrop-blur-md">
      <Loader />
    </div>
  )
}
