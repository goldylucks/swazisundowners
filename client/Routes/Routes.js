import { h, Component } from 'preact'

import Router from 'preact-router'

import Home from '../containers/Home'

export default class Routes extends Component {

  render () {
    return (
      <Router>
        <Home path='/' default />
      </Router>
    )
  }

}
