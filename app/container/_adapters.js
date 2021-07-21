'use strict'

const axios = require('../../externals/adapters/axios')

function resolve (container) {
  container.adapters = {
    axios: axios()
  }
}

module.exports = {
  resolve: resolve
}
