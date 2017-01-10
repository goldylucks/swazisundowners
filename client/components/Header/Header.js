import { h, Component } from 'preact'

import styles from './Header.css'

export default class Header extends Component {

  render () {
    return (
      <div className={ styles.header }>
        <a href='/' className={ styles.logo }>SWAZI SUNDOWNERS</a>
        <nav className={ styles.nav }>
          <ul>
            <li className={ `${styles.navItem} ${this.activeNavClass('restaurant')}` }><a href='/restaurant'>Restaurant</a></li>
            <li className={ `${styles.navItem} ${this.activeNavClass('accommodation')}` }><a href='/accommodation'>Accommodation</a></li>
            <li className={ `${styles.navItem} ${this.activeNavClass('activities')}` }><a href='/activities'>Activities</a></li>
            <li className={ `${styles.navItem} ${this.activeNavClass('contact')}` }><a href='/contact'>Contact</a></li>
          </ul>
        </nav>
        <div className='clearfix' />
      </div>
    )
  }

  activeNavClass (item) {
    return document.location.pathname.match(item) ? styles.activeNavItem : ''
  }

}
