export default {
  id: 'help',
  name: 'Help',
  description: 'helps users',
  command: async function (msg) {
    if (msg.content !== 'help') {
      return false
    }
    return 'Commands: ```ping - returns the response time of the bot\nmeme - sends a random meme```'
  }
}
