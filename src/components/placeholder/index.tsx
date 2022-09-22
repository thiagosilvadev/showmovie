import React from 'react'
import { StyledComponent } from 'styled-components'
import { Loader } from '../loader'

type PlaceholderProps = {
  Component: typeof React.Component
}

function Placeholder({ Component }: PlaceholderProps) {
  return (
    <Component>
      <Loader />
    </Component>
  )
}

export { Placeholder }
