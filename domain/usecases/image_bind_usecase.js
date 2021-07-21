'use strict'

const sharp = require('sharp');


module.exports = () => {

	/**
	* Combine Cat Image to one image
	* arraybuffer
	* @param first_cat_image - First cat image 
	*
	* arraybuffer 
	* @param second_cat_image - Second catimage
	*
	* number 
	* @param width - width of the image
	*
	* number
	* @param height - height of the image
	*
	* arraybuffer object
	* @return arraybuffer|null
	*/
	async function bind(first_cat_image, second_cat_image, width, height) {
		if (first_cat_image !== null && second_cat_image !== null) {
			
			const blankImage = await sharp({
				create: {
					width: width * 2,
					height: height,
					channels: 4,
					background: { r: 0, g: 0, b: 0, alpha: 0 }
				}
			}).toFormat('jpeg').toBuffer();

			const firstBind = await sharp(blankImage)
				.composite([{ input: first_cat_image, gravity: 'southwest' }])
				.toFormat('jpeg').toBuffer();

			const secondBind = await sharp(firstBind)
				.composite([{ input: second_cat_image, gravity: 'southeast' }])
				.toFormat('jpeg').toBuffer();

			return secondBind;
		}
	}


	return {
		bind: bind
	}

}