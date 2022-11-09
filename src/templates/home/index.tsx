import { Card, CardPlaceholder, CardProps } from '@/components/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Switch } from './components/switch'
import * as Grid from './components/grid'
import classNames from 'classnames'

import styles from './styles.module.css'

type CategoryValues<T = any> = {
  label: string
  value: T
}

export interface HomeProps {
  content: CardProps[]
  isLoading: boolean
  category: string
  categoryValues: CategoryValues[]
  searchValue: string
  onSearchValueChange: (value: string) => void
  onSelectCategory: (category: CategoryValues['value']) => void
}

const HomeLayout = ({
  content,
  isLoading,
  category,
  categoryValues,
  onSelectCategory,
  searchValue,
  onSearchValueChange
}: HomeProps) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="w-full pt-20 ">
          <h1 className="text-6xl font-bold tracking-tight text-dark-50">
            Bem vindo
            <br /> ao ShowMovie!
          </h1>
          <h2 className="text-[#c3c8d4] text-xl mt-2 font-medium tracking-[-0.015em]">
            Encontre milhares de filmes e séries, faça a sua pesquisa:
          </h2>
          <form
            className={classNames(styles.hero_form, 'group', 'h-16')}
            onSubmit={(e) => e.preventDefault()}
          >
            <label
              className={classNames(
                styles.label,
                'absolute',
                'top-0',
                'text-dark-100',
                'font-medium'
              )}
            >
              Buscar por filmes ou séries
            </label>
            <input
              type="text"
              className={classNames(
                'outline-none',
                'font-secondary text-white text-base',
                'border border-dark-700 border-r-0',
                'w-full',
                'py-3 px-4 pt-8',
                'rounded-xl rounded-r-none',
                'bg-black/10',
                'group-focus-within:border-primary-600'
              )}
              placeholder="Ex: Breaking Bad"
              value={searchValue}
              onChange={(e) => onSearchValueChange(e.target.value)}
            />
            <button
              className="px-4 py-5 border border-l-0 cursor-pointer bg-black/10 group-focus-within:border-primary-600 rounded-r-xl border-dark-700"
              type="submit"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#8E95A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#8E95A9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
          <Switch
            value={category}
            items={categoryValues}
            onChange={onSelectCategory}
          />
        </div>
        <Grid.Wrapper>
          {isLoading
            ? Array(4)
                .fill(CardPlaceholder)
                .map((Card, index) => <Card key={index} />)
            : content.map((card, index) => <Card key={index} {...card} />)}
        </Grid.Wrapper>
      </div>
      <Footer />
    </>
  )
}
export { HomeLayout }
