import { Loader } from '@/components/loader'
import classNames from 'classnames'
import styles from './styles.module.scss'

export const SeasonSkeleton = () => {
  return (
    <main className="container">
      <div className="flex gap-8">
        <div className={styles.image__placeholder}>
          <Loader />
        </div>

        <div className="w-full">
          <div className={styles.title__placeholder}>
            <Loader />
          </div>{' '}
          {/* title */}
          <p className={classNames(styles.overview__placeholder, 'mt-8')}>
            <Loader />
          </p>
          <p className={classNames(styles.overview__placeholder, 'mt-4')}>
            <Loader />
          </p>
          <p className={classNames(styles.overview__placeholder, 'mt-4')}>
            <Loader />
          </p>
        </div>
      </div>
    </main>
  )
}
