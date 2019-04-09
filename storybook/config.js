import { configure, addParameters } from '@storybook/react'
import packageJson from '../package.json'

addParameters({
  options: {
    name: 'React CSS Spinners',
    url: packageJson.homepage,
    isFullScreen: false,
    showPanel: true
  }
})

function loadStories () {
  require('../stories/index.js')
}

configure(loadStories, module)
