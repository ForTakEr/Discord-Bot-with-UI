module.exports = async (msg) => {
    if (msg.content !== 'meme') {
        return false;
    }

    const rando_imgs = [
        //Insert meme links here.
        "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    ];

    return {
        file: rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
    };
};