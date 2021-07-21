'use strict'

 const _adapters = require('./_adapters')
 const _services = require('./_services')

const _container = {}

/**
 * resolve all dependencies and return the container.
 *
 * @returns _container
 * @private
 */
function _resolve() {
	// low level dependencies need to be resolved first
	_adapters.resolve(_container)
	_services.resolve(_container)
}


module.exports = (app) => {
	_resolve()
	app.container = _container;
}