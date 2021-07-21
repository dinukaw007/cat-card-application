 /**
  * Client to consume third party apis
  */
 const axios = require('axios')

 module.exports = () => {
   /**
	* Convert the response to json
	* string|object
	* @param response
	*
	* integer
	* @param status
	*
	* json object
	* @return object
	*/
   function getJSONResp (response, status) {
	 return {
	   entity: response,
	   httpStatus: status
	 }
   }
 

   /**
	* GET request
	* string
	* @param url - URL
	*
	* json string
	* @param headers - Headers
	*
	* json object
	* @return object|null
	*/
   async function get (url, headers = undefined , responseType=undefined) {


	 let res = null
	 try {
	   res = await axios({
		 method: 'get',
		 url: url,
		 headers: headers,
		 responseType: responseType,
	   })
	   
	   res = getJSONResp(res.data, res.httpStatus)
	   console.log('Received response');
	 } catch (error) {
	   if (error.response) {
		 /*
		 * The request was made and the server responded with a
		 * status code that falls out of the range of 2xx
		 */
		 console.log('Fail response with status:' +  error.response.status);
		 res = getJSONResp(null, error.response.status)
		 
	   } else if (error.request) {
		 /*
		  * The request was made but no response was received, `error.request`
		  * is an instance of XMLHttpRequest in the browser and an instance
		  * of http.ClientRequest in Node.js
		  */
		 console.log(error.request)
	   } else {
		 // Something happened in setting up the request and triggered an Error
		 console.log('Error', error.message)
	   }
	 }
	 return res
   }
 

   return {
	 get: get,
   }
 }
 