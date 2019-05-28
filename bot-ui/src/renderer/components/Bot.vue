<template>
</template>

<script>
  export default {
    name: 'bot',
    created () {
      var Discord = require('discord.js')
      var client = new Discord.Client()
      var botToken = ''

      var commands = require('../../bot/commands')
      Object.values(commands).forEach(async (command) => {
        this.$store.dispatch('addCommand', command.default)
      })
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
      client.on('message', (message) => {
        var msg = message.content
        if (!msg.startsWith(prefix) || message.author.bot) return
        var args = msg.slice(prefix.length).split(/ +/)
        var sentCommand = args.shift().toLowerCase()
        message.content = sentCommand
        Object.values(commands).forEach(async (command) => {
          if (!this.isCommandEnabled(command.default.id)) {
            return
          }
          var response = await command.default.command(message)
          console.log(response)
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
    },
    data () {
      return {
      }
    },
    methods: {
      isCommandEnabled (id) {
        let el
        this.commands.forEach(element => {
          if (element.id === id) {
            el = element
          }
        })
        return el.enabled
      }
    },
    computed: {
      commands () {
        return this.$store.state.commands.commands
      }
    }
  }
</script>

