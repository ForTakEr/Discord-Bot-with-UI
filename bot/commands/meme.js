var rp = require('request-promise');


module.exports = async (msg) => {
    if (msg.content !== 'meme') {
        return false;
    }

    //https://some-random-api.ml/meme

    var response = rp('http://some-random-api.ml/meme').then(function (htmlString) {
        return htmlString;
    });

    respPromise = Promise.resolve(response);
    var promise = {
        promise: respPromise,
        isPromise: true
    };
    return promise;
};