/* eslint no-console: 0 */
export default (() => {
  if (process.env.NODE_ENV !== 'production') {
    global.SHOUT = SHOUT
  }
})()

function SHOUT (...args) {
  console.log('*********************')
  console.log.apply(null, args)
  console.log('*********************')
}
