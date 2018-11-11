const path = require('path')
const readContent = require('./lib/readContent')
const logger = require('./lib/logger')

const REG_INJECT = /<!--\s*inline-script_(\S+)\s*-->/gi
class HtmlWebpackInlineScriptPlugin {
  constructor(injectList) {
    this.injectList = injectList
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlWebpackInlineScriptPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
        'HtmlWebpackInlineScriptPlugin',
        (htmlPluginArgs, callback) => {
          try {
            this.resolveSource(compilation)
            htmlPluginArgs.html = htmlPluginArgs.html.replace(REG_INJECT, (match, name) => {
              return this.replaceInlineScript(name)
            })
            const outputHtml = this.replaceInlineScript(compilation, htmlPluginArgs.html)
          } catch (error) {
            logger.error(error)
          }
          callback(null, htmlPluginArgs)
        }
      )
    })
  }

  replaceInlineScript(name) {
    const script = this.injectList.find(asset => {
      return asset.name === name
    })
    return `<script>${script.source}</script>`
  }

  resolveSource(compilation, assetUrl) {
    const publicUrlPrefix = compilation.outputOptions.publicPath || ''
    this.injectList.forEach(asset => {
      const assetName = path.posix.relative(publicUrlPrefix, asset.path)
      readContent(assetName).then(source => {
        asset.source = source
      })
    })
  }
}

module.exports = HtmlWebpackInlineScriptPlugin
