import { h, render } from 'preact'

import './utils/logger'
import './utils/dev'
import './styles/reset.css'
import './styles/globals.css'

let node = document.getElementById('root')

// in development, set up HMR:
if (module.hot) {
  module.hot.accept('./containers/App', init)
}

document.getElementById('loading-message').remove()
init()

function init () {
  const App = require('./containers/App').default
  node = render(<App />, node, node.lastChild)
}
