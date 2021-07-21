'use strict'

const cat_service = require('./../../externals/services/cat_service')
const save_file_service = require('./../../externals/services/save_file_service')

function resolve(container) {
	container.services = {
		cat_service: cat_service(container.adapters.axios),
		save_file_service: save_file_service(),
	}
}

module.exports = {
	resolve: resolve
}
