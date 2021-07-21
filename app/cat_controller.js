'use strict'

const bind_cat_image_usecase = require('./../domain/usecases/bind_cat_image_usecase')

module.exports = (app) => {
	const services = app.container.services;
	const bind_cat_image_usecase_object = bind_cat_image_usecase(services.cat_service,services.save_file_service)

	async function catImageBindController(argv) {
		const {
			greeting = 'Hello',
			who = 'You',
			width = 400,
			height = 500,
			color = 'Pink',
			size = 100,
		} = argv;

		bind_cat_image_usecase_object.getCatCard(greeting, width, height, color, size,process.env.OUTPUT_FILENAME)
	}

	return {
		catImageBindController: catImageBindController
	}
}