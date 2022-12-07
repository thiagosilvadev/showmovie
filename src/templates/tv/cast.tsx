import Cast from '@/components/cast'
import tmdb from '@/lib/tmdb'

type CastTemplateProps = {
  tvShowId: number
}

export const CastTemplate = async ({ tvShowId }: CastTemplateProps) => {
  const credits = await tmdb().tvshows.loadCredits(tvShowId)
  const cast = credits.cast ? credits.cast.slice(0, 15) : []

  return (
    <>
      <Cast.Title className="mt-12">Elenco Principal</Cast.Title>
      <Cast.List>
        {cast.slice(0, 15).map((actor) => (
          <Cast.Item
            key={actor.id}
            avatar={actor.profile_path}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </Cast.List>
    </>
  )
}

export const CastSkeleton = () => (
  <>
    <Cast.Title className="mt-12">Elenco Principal</Cast.Title>
    <Cast.List className="relative">
      {Array(3)
        .fill(Cast.ItemSkeleton)
        .map((Item, index) => (
          <Item key={index} />
        ))}
    </Cast.List>
  </>
)
