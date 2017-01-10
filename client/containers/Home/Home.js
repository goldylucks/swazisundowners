import { h, Component } from 'preact'

import Header from '../../components/Header'
import ImageBox from '../../components/ImageBox'

import styles from './Home.css'

export default class Home extends Component {

  render () {
    return (
      <div>
        <Header />
        { this.renderImageBoxes() }
      </div>
    )
  }

  renderImageBoxes () {
    return imagesBoxesData.map(item => (
      <ImageBox { ...item } className={ styles.imageBox } />
    ))
  }
}

const imagesBoxesData = [
  { title: 'Bis ass pool', href: '/activities', imgSrc: '/client/pool.jpg' },
  { title: 'Delicious meals', href: '/restaurant', imgSrc: '/client/restaurant.jpg' },
]
