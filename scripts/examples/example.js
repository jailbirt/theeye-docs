#!/usr/local/bin/node

// error and output handlers must go first.

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
  let output = {
    state: "failure",
    data: {
      message: err.message,
      code: err.code,
      data: err.data 
    }
  }
  console.error(JSON.stringify(output))
}

process.on('unhandledRejection', (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p)
  failureOutput(reason)
})

process.on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown')
  failureOutput(err)
})

// NodeJs boilerplate
const main = async () => {
  let data = []
  // add your code here.
  return data
}

// invoke main and capture result output
main().then(successOutput).catch(failureOutput)
