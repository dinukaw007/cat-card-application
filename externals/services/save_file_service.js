'use strict'
const sharp = require('sharp');

module.exports = () => {

	async function save(file, file_name) {
		sharp(file)
			.toFile(file_name, (err, info) => {
				console.log("The file was saved!");
			});
	}
	return {
		save: save
	}

  return {
    save: save
  }
}
