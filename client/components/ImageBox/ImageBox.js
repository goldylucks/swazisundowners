import { h, Component } from 'preact'

import styles from './ImageBox.css'

export default class ImageBox extends Component {

  render ({ href }) {
    return href ? this.renderLink() : this.renderNoLink()
  }

  renderLink () {
    const { imgSrc, title, href, className } = this.props
    return (
      <a className={ `${className} ${styles.imageBox}` } href={ href } style={ { backgroundImage: `url(${imgSrc})` } }>
        <div className={ styles.overlay }>
          <span className={ styles.title }>{ title }</span>
          <div className={ styles.moreContainer }>
            <span className={ styles.more }>View More</span>
          </div>
        </div>
      </a>
    )
  }

  renderNoLink () {
    const { imgSrc, title, className } = this.props
    return (
      <div className={ `${className} ${styles.imageBox}` } style={ { backgroundImage: `url(${imgSrc})` } }>
        <div className={ styles.overlay }>
          <span className={ styles.title }>{ title }</span>
        </div>
      </div>
    )
  }
}
