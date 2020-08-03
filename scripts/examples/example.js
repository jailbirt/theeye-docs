#!/usr/local/bin/node

// NodeJs boilerplate
const main = async () => {
  let data = []
  // add your code here.
  return data
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

main().then(successOutput).catch(failureOutput)
