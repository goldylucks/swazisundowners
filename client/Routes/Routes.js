import { h, Component } from 'preact'

import Router from 'preact-router'

import Home from '../containers/Home'
import Restaurant from '../containers/Restaurant'
import Accommodation from '../containers/Accommodation'
import Contact from '../containers/Contact'
import Activities from '../containers/Activities'

export default class Routes extends Component {

  render () {
    return (
      <Router>
        <Home path='/' default />
        <Restaurant path='/restaurant' />
        <Accommodation path='/accommodation' />
        <Contact path='/contact' />
        <Activities path='/activities' />
      </Router>
    )
  }

}
