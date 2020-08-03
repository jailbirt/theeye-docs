#!/usr/local/bin/node

// NodeJs boilerplate
const main = async () => {
 try  {
  let data = []
  // add code here.
  // let response = await aHTTPPromiseCall()
  // data.push( response )
  successOutput(data)
 } catch (err) {
  failureOutput(err)
 }
}

/**
 * @param {Array} data
 */
const successOutput = (data) => {
  let output = { state: "success", data }
  console.log(JSON.stringify(output)) 
}

/**
 * @param {Error} err
 */
const failureOutput = (err) => {
  let output = { state: "failure", data: [ err.message, err.data ] }
  console.error(JSON.stringify(output))
}

const aFunctionCall = await () => {
 // do async things here
}

/**
 * @return {Promise}
 */
const aHTTPPromiseCall = () => {
 return new Promise ( (resolve, reject) => {
  // async call with callback. seudo code
  // http.request('http://google.com')
  // http.on('error', err => reject(err))
  // http.on('end', data => resolve(data))
 })
}

main()
