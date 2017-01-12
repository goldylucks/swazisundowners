import { h, render } from 'preact'

import './utils/logger'
import './utils/dev'
import './styles/reset.css'
import './styles/globals.css'

import App from './containers/App'
const node = document.getElementById('root')

document.getElementById('loading-message').remove()

render(
  <App />,
  node,
  node.lastChild,
)
