import { BackdropPlaceholder } from '@/components/backdrop'
import { PosterPlaceholder } from '@/components/poster'

export default function Loading() {
  return (
    <div className="mt-5">
      <BackdropPlaceholder />
      <div className="page__info_wrapper">
        <aside className="h-full">
          <PosterPlaceholder />
        </aside>
      </div>
    </div>
  )
}
