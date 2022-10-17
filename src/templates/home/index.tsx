import { Card, CardPlaceholder, CardProps } from '@/components/card'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Switch } from './components/switch'
import * as Hero from './components/hero'
import * as Grid from './components/grid'

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
      <Container>
        <Hero.Wrapper>
          <Hero.Title>
            Bem vindo
            <br /> ao ShowMovie!
          </Hero.Title>
          <Hero.Subtitle>
            Encontre milhares de filmes e séries, faça a sua pesquisa:
          </Hero.Subtitle>
          <Hero.Form onSubmit={(e) => e.preventDefault()}>
            <Hero.Label>Buscar por filmes ou séries</Hero.Label>
            <Hero.Input
              type="text"
              placeholder="Ex: Breaking Bad"
              value={searchValue}
              onChange={(e) => onSearchValueChange(e.target.value)}
            />
            <Hero.Button type="submit">
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
            </Hero.Button>
          </Hero.Form>
          <Switch
            value={category}
            items={categoryValues}
            onChange={onSelectCategory}
          />
        </Hero.Wrapper>
        <Grid.Wrapper>
          {isLoading
            ? Array(4)
                .fill(CardPlaceholder)
                .map((Card, index) => <Card key={index} />)
            : content.map((card, index) => <Card key={index} {...card} />)}
        </Grid.Wrapper>
      </Container>
      <Footer />
    </>
  )
}
export { HomeLayout }
