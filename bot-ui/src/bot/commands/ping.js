export default {
  id: 'ping',
  name: 'Ping',
  description: 'Shows response time',
  command: async function (msg) {
    if (msg.content !== 'ping') {
      return false
    }
    return new Date().getTime().toString() - msg.createdTimestamp + 'ms'
  }
}
