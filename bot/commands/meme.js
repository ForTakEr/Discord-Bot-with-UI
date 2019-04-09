var axios = require('axios');
const url = "https://some-random-api.ml/meme";


module.exports = async (msg) => {
    if (msg.content !== 'meme') {
        return false;
    }

    respPromise = Promise.resolve(axios.get(url));
    var promise = {
        promise: respPromise,
        isPromise: true
    };
    return promise;
};