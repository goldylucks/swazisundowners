import { h, Component } from 'preact'
import Header from '../../components/Header'
import constants from '../../constants'
import logger from '../../utils/logger'
import http from '../../utils/http'

export default class Contact extends Component {

  state = {
    name: null,
    email: null,
    phone: null,
    gotcha: null, // used to detect spam bots
  }

  render () {
    return (
      <div>
        <Header />
        { /* this.renderContact() */ }
      </div>
    )
  }

  renderContact () {
    const { name, email, phone, message, gotcha } = this.state

    return (
      <form onSubmit={ this.onSubmit }>
        <input type='text' name='name' value={ name } onChange={ evt => this.setState({ name: evt.target.value }) } placeholder='Name' />
        <input type='email' name='_replyto' value={ email } onChange={ evt => this.setState({ email: evt.target.value }) } placeholder='Email' />
        <input type='phone' name='phone' value={ phone } onChange={ evt => this.setState({ phone: evt.target.value }) } placeholder='Phone' />
        <textarea name='phone' onChange={ evt => this.setState({ phone: evt.target.value }) } placeholder='Your message here'>{ message }</textarea>
        <input type='text' name='_gotcha' value={ gotcha } onChange={ evt => this.setState({ gotcha: evt.target.value }) } style={ { display: 'none' } } placeholder='' />
        <input type='submit' value='Send' />
      </form>
    )
  }

  onSubmit = evt => {
    evt.preventDefault()
    const { name, email, phone, gotcha } = this.state
    const data = { name, email, phone, gotcha }
    if (this.getFormError(data)) {
      global.alert(this.getFormError(data))
      return
    }
    logger.log('submit: data:', data)
    http.POST({
      url: 'https://formspree.io/' + constants.email,
      data,
    })
    .then(res => {
      global.alert('Thank you for contacting us, we will get back at you as soon as we can!')
      logger.log('submit: success', res)
    })
    .catch(err => {
      global.alert('There was an error processing your request. Please try again. If the problem continues please contact us directly.')
      logger.error('submit: err:', err)
    })
  }

  getFormError ({ email, phone }) {
    if (!(email && email.length) && !(phone && phone.length)) {
      return 'Email or phone required. How are we suppose to contact you without them? :)'
    }
  }
}
