const request = require('request')

module.exports = async (msg) => {
  if (msg.content !== 'meme') {
    return false
  }

  // https://some-random-api.ml/meme

  var linkToMeme = ''

  request('https://some-random-api.ml/meme', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      linkToMeme = JSON.parse(body).url
    }
  })

  return {
    file: linkToMeme
  }
}
