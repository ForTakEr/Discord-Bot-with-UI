var axios = require('axios')
var url = 'https://some-random-api.ml/meme'

export default {
  id: 'meme',
  name: 'Meme',
  description: 'Shows a meme',
  command: async function (msg) {
    if (msg.content !== 'meme') {
      return false
    }
    var respPromise = Promise.resolve(axios.get(url))
    var promise = {
      promise: respPromise,
      isPromise: true
    }
    return promise
  }
}
