export default async function (msg) {
  if (msg.content !== 'ping') {
    return false
  }

  return new Date().getTime().toString() - msg.createdTimestamp + 'ms'
}
