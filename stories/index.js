import React from 'react'
import { storiesOf } from '@storybook/react'
import { Eclipse, Ripple } from '../src'

storiesOf('Spinners', module)
  .add('Eclipse', () => <Eclipse />)
  .add('Ripple', () => <Ripple />)
