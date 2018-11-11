const fs = require('fs')
const Uglify = require('uglify-js')

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
            this.resolveSource(compilation.options.mode)
            htmlPluginArgs.html = htmlPluginArgs.html.replace(REG_INJECT, (match, name) => {
              return this.replaceInlineScript(name)
            })
          } catch (error) {
            throw new HtmlWebpackInlineScriptPluginError(error.message)
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
    return script.source
  }

  resolveSource(env) {
    this.injectList.forEach(asset => {
      try {
        if (env === 'development') {
          if (!asset.online) {
            const code = fs.readFileSync(asset.path, 'utf-8')
            asset.source = `<script type="text/javascript">\n${code}\n</script>`
          } else {
            asset.source = ''
          }
        } else {
          const code = fs.readFileSync(asset.path, 'utf-8')
          const minifyCode = Uglify.minify(code).code
          asset.source = `<script type="text/javascript">${minifyCode}</script>`
        }
      } catch (error) {
        throw new HtmlWebpackInlineScriptPluginError(error.message)
      }
    })
  }
}

function HtmlWebpackInlineScriptPluginError(message) {
  this.name = 'HtmlWebpackInlineScriptPluginError'
  this.message = message || 'Something Error'
  Error.captureStackTrace(this, HtmlWebpackInlineScriptPluginError)
}

module.exports = HtmlWebpackInlineScriptPlugin
