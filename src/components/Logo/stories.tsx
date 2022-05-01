import { ComponentMeta, ComponentStory } from '@storybook/react'
import theme from 'styles/theme'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'fullscreen'
  },
  decorators: [(Story) => <div style={{ width: '40rem' }}>{Story()}</div>]
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
