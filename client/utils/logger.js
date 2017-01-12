/* eslint no-console: 0 */

global.IS_LOGGING = process.env.NODE_ENV !== 'production'

export default {
  log, info, error, warn,
}

function log (...args) {
  if (!global.IS_LOGGING) {
    return
  }
  console.log(...args)
}

function info (...args) {
  if (!global.IS_LOGGING) {
    return
  }
  console.info(...args)
}

function warn (...args) {
  if (!global.IS_LOGGING) {
    return
  }
  console.warn(...args)
}

function error (...args) {
  if (!global.IS_LOGGING) {
    return
  }
  console.error(...args)
}
