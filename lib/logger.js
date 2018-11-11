const logger = {
  debug: message => console.log('[html-webpack-inline-script-plugin] \x1b[32m%s\x1b[0m', message),
  error: error => console.log('[html-webpack-inline-script-plugin] \x1b[31m%s\x1b[0m', error.message)
}

module.exports = logger
