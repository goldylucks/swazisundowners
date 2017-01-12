import { h, Component } from 'preact'
import Header from '../../components/Header'
import constants from '../../constants'
import logger from '../../utils/logger'
import http from '../../utils/http'
import styles from './Contact.css'

export default class Contact extends Component {

  state = {
    name: null,
    email: null,
    phone: null,
    gotcha: null, // used to detect spam bots
  }

  componentDidMount () {
    this.loadGoogleMap()
  }

  render () {
    return (
      <div>
        <Header />
        <div className={ styles.mapAndForm }>
          <div id='google-maps' className={ styles.map } />
          { this.renderContact() }
        </div>
        <div className={ styles.directionsAndDetails }>
          { this.renderDirections() }
          { this.renderDetails() }
        </div>
      </div>
    )
  }

  renderContact () {
    const { name, email, phone, message, gotcha } = this.state

    return (
      <form onSubmit={ this.onSubmit } className={ styles.contact }>
        <input type='text' name='name' value={ name } onChange={ evt => this.setState({ name: evt.target.value }) } placeholder='Name' />
        <input type='email' name='_replyto' value={ email } onChange={ evt => this.setState({ email: evt.target.value }) } placeholder='Email' />
        <input type='phone' name='phone' value={ phone } onChange={ evt => this.setState({ phone: evt.target.value }) } placeholder='Phone' />
        <textarea name='phone' onChange={ evt => this.setState({ phone: evt.target.value }) } placeholder='Your message here'>{ message }</textarea>
        <input type='text' name='_gotcha' value={ gotcha } onChange={ evt => this.setState({ gotcha: evt.target.value }) } style={ { display: 'none' } } placeholder='' />
        <button type='submit'>Send</button>
      </form>
    )
  }

  renderDirections () {
    return (
      <div className={ styles.directions }>
        <h2>Directions</h2>
        <div className={ styles.directionsCar }>
          <h3>By Car</h3>
          <p>
            From the main Mbabane / Manzini highway, take the MR103 to Ezulwini / Malkerns. Look for our signs - we're 7km from the Matsapha roundabout (if you're coming from Manzini) and 3km from Mahlanya Market (coming from Mbabane).
          </p>
        </div>
        <div>
          <h3>By Local Transport</h3>
          <p>
            <strong>From Manzini taxi rank</strong>: catch a minibus-taxi to Mahhala - it's a shopping centre in the nearby town of Matsapha. From Mahhala, ask directions to a minibus-taxi that goes to Mahlanya Market, passing Sundowners on the way. Cost: about US$1
          </p>
          <p>
            <strong>From Mbabane taxi rank</strong>: catch a minibus-taxi to Mahhala, passing Mahlanya on the way. The driver will know where Sundowners is. Cost: about US$1.
          </p>
          <p>
            For about US$25 you can get a private cab directly to Sundowners from either Mbabane or Manzini. We're about 30km from each.
          </p>
        </div>
      </div>
    )
  }

  renderDetails () {
    return (
      <div className={ styles.details }>
        <div className={ styles.detailsChunk }>
          <h6>Address</h6>
          <p>Farm 1187, MR103, Malkerns, Manzini, Swaziland</p>
        </div>
        <div className={ styles.detailsChunk }>
          <h6>Phone</h6>
          <p>+268 7687 8941</p>
          <p>+268 7604 1844</p>
          <p>+268 7650 9472</p>
        </div>
        <div className={ styles.detailsChunk }>
          <h6>Email</h6>
          <p><a href='mailto:info@swazisundowners.com'>info@swazisundowners.com</a></p>
        </div>
      </div>
    )
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { name, email, phone, gotcha } = this.state
    const data = { name, email, phone, gotcha }
    if (this.getFormError(data)) {
      window.alert(this.getFormError(data))
      return
    }
    logger.log('submit: data:', data)
    http.POST({
      url: 'https://formspree.io/' + constants.EMAIL,
      data,
    })
    .then(res => {
      window.alert('Thank you for contacting us, we will get back at you as soon as we can!')
      logger.log('submit: success', res)
    })
    .catch(err => {
      window.alert('There was an error processing your request. Please try again. If the problem continues please contact us directly.')
      logger.error('submit: err:', err)
    })
  }

  getFormError ({ email, phone }) {
    if (!(email && email.length) && !(phone && phone.length)) {
      return 'Email or phone required. How are we suppose to contact you without them? :)'
    }
  }

  loadGoogleMap () {
    if (document.getElementById('google-maps-script')) {
      logger.log('google maps script detected')
      this.initMap()
      return
    }

    logger.log('loading google maps script')
    window.initMap = initMap
    const script = document.createElement('script')
    script.id = 'google-maps-script'
    script.async = true
    script.defer = true
    script.src = `https://maps.googleapis.com/maps/api/js?key=${constants.GOOGLE_MAPS_API_KEY}&callback=window.initMap`
    document.body.appendChild(script)
  }

}

function initMap () {
  const uluru = { lat: -26.5064818, lng: 31.2472254 }
  const map = new window.google.maps.Map(document.getElementById('google-maps'), {
    zoom: 12,
    // mapTypeId: window.google.maps.MapTypeId.SATELLITE, // uncomment to start in satellite mode
    center: uluru,
  })

  new window.google.maps.Marker({ // eslint-disable-line no-new
    position: uluru,
    map,
  })
}
