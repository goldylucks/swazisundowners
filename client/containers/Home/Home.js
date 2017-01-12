import { h, Component } from 'preact'

import Header from '../../components/Header'
import ImageBox from '../../components/ImageBox'
import boxesData from './homeBoxes'
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
    return boxesData.map(item => (
      <ImageBox { ...item } className={ styles.imageBox } />
    ))
  }
}
