import { h, Component } from 'preact'

import styles from './ImageBox.css'

export default class ImageBox extends Component {

  render ({ imgSrc, title, href, className }) {
    return (
      <a className={ `${className} ${styles.imageBox}` } href={ href }>
        <img src={ imgSrc } className={ styles.image } />
        <div className={ styles.overlay }>
          <span className={ styles.title }>{ title }</span>
          <div className={ styles.moreContainer }>
            <span className={ styles.more }>View More</span>
          </div>
        </div>
      </a>
    )
  }
}
