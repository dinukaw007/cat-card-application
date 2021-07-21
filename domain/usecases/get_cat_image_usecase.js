'use strict'

module.exports = (cat_service) => {

	/**
	* GET Cat Image
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
	* arraybuffer object
	* @return arraybuffer|null
	*/
	async function getCatImage(greeting, width, height, color, size) {
		const image = await cat_service.getCatImageService(greeting, width, height, color, size);
		return image
	}

	return {
		getCatImage: getCatImage
	}
}