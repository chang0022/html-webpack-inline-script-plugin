const fs = require('fs-extra')

const DEFAULT_ENCONDING = 'utf8'

const readContent = (filename, encoding = DEFAULT_ENCONDING) => {
  return fs.readFile(filename, encoding).catch(() => {
    throw new Error(`error opening ${filename}`)
  })
}

module.exports = readContent
