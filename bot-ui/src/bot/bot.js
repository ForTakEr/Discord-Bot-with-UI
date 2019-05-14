'use strict'
var Discord = require('discord.js')

var client = new Discord.Client()
var botToken = 'NTQ0ODM4NTk3NTA1OTc0Mjkx.D1arZQ.MRQaVsPYO6cMhcmUhoP2FlhmDEI'

var commands = require('./commands')

var prefix = '-' // If error during login, return error message.

client.login(botToken).catch(function (error) {
  return error.message
}) // Invite link https://discordapp.com/api/oauth2/authorize?client_id=544838597505974291&permissions=10240&scope=bot

client.on('ready', function () {
  console.log('I am ready!')
  client.user.setActivity('-' + 'help', {
    type: 'PLAYING'
  })
})
client.on('message', function (message) {
  var msg = message.content
  if (!msg.startsWith(prefix) || message.author.bot) return
  var args = msg.slice(prefix.length).split(/ +/)
  var sentCommand = args.shift().toLowerCase()
  message.content = sentCommand
  Object.values(commands).forEach(async function (command) {
    var response = await command(message)
    
    
    if (response) {
      if (response.isPromise) {
        response.promise.then(function (value) {
          var data = value.data
          var test = new Discord.RichEmbed().setTitle(data.text).setImage(data.url)
          message.channel.sendEmbed(test)
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        message.reply(response)
      }
    }
  })
})
