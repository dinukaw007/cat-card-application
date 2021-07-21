'use strict'
const get_cat_image_usecase = require('../usecases/get_cat_image_usecase')
const image_bind_usecase = require('../usecases/image_bind_usecase')
const image_file_save_usecase = require('../usecases/image_file_save_usecase')

module.exports = (cat_service, save_file_service) => {

	const get_cat_image_usecase_object = get_cat_image_usecase(cat_service)
	const image_bind_usecase_object = image_bind_usecase()
	const file_save_usecase_object = image_file_save_usecase(save_file_service)

	/**
	* Get cat card with combining two cat images 
	* string
	* @param greeting - greeting message
	*
	* number 
	* @param width - width of image
	*
	* number 
	* @param height - height of image
	*
	* string
	* @param color - color of text
	*
	* number 
	* @param size - size of text
	*
	* string 
	* @param file_name - name of the output file with type
	*
	* arraybuffer object
	* @return arraybuffer|null
	*/
	async function getCatCard(greeting, width, height, color, size, file_name) {
		const first_cat_image = await get_cat_image_usecase_object.getCatImage(greeting, width, height, color, size);
		const second_cat_image = await get_cat_image_usecase_object.getCatImage(greeting, width, height, color, size);
		const binded_image = await image_bind_usecase_object.bind(first_cat_image, second_cat_image, width, height);
		file_save_usecase_object.save(binded_image, file_name);
	}

	return {
		getCatCard: getCatCard
	}
}