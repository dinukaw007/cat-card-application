'use strict'

module.exports = (axiosAdapter) => {

  async function getCatImageService(greeting, width, height, color, size) {

    const url = `${process.env.CAT_API}${greeting}?width=${width}&height=${height}&color=${color}&size=${size}`

    const response = await axiosAdapter.get(url, null, 'arraybuffer')

    return response.entity

  }
  return {
    getCatImageService: getCatImageService
  }
}
