module.exports = async (msg) => {
  if (msg.content !== 'help') {
    return false
  }
  return 'Commands: ```ping - returns the response time of the bot\nmeme - sends a random meme```'
}
