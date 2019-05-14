'use strict'
var axios = require('axios')
var name = 'meme'
var description = 'meme'
var url = 'https://some-random-api.ml/meme'

export default async function (msg) {
  if (msg.content !== name) {
    return false
  }

  var respPromise = Promise.resolve(axios.get(url))
  var promise = {
    promise: respPromise,
    isPromise: true
  }
  return promise
}
