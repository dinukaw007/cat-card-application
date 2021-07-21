'use strict'

module.exports = (file_save_service) => {

	/**
	* Save file
	* arraybuffer
	* @param file - file
	*
	* string 
	* @param file_name - file name
	*/
	async function save(file, file_name) {
		file_save_service.save(file, file_name);
	}
	return {
		save: save
	}
}