import Image from 'next/image'
import Link from 'next/link'

type SeasonProps = {
  id: number
  tvshow_id: number
  name: string
  year: string
  episode_count: number
  poster: string
  overview: string
}

const Season = (props: SeasonProps) => {
  return (
    <Link
      href={`${props.tvshow_id}/seasons`}
      passHref
      className="flex flex-col sm:flex-row text-white bg-dark-800/80 backdrop-blur-md rounded-2xl p-5 md:p-3 gap-4 w-[80%]"
    >
      <div className="relative sm:flex-shrink-0 sm:w-40">
        <Image
          className="relative object-cover rounded-xl"
          src={`http://image.tmdb.org/t/p/w342${props.poster}`}
          alt={props.name}
          width={160}
          height={240}
        />
      </div>
      <div className="flex-grow-0 py-4">
        <h4 className="text-2xl font-bold tracking-tight ">{props.name}</h4>
        <h5 className="mb-2 text-base font-bold tracking-tight">
          {props.year} | {props.episode_count} episódio
          {props.episode_count > 1 && 's'}
        </h5>
        <p className="w-full mt-6 text-ellipsis font-secondary">
          {props.overview}
        </p>
      </div>
    </Link>
  )
}

export { Season }
