var rp = require('request-promise');


module.exports = async (msg) => {
    if (msg.content !== 'meme') {
        return false;
    }

    //https://some-random-api.ml/meme

    var linkToMeme = "";

    var response = rp('https://some-random-api.ml/meme').then(function (htmlString) {
        return htmlString;
    });

    respPromise = Promise.resolve(response);

    respPromise.Promise = true;

    return respPromise;
};