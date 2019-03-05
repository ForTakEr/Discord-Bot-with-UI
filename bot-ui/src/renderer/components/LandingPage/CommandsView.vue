<template>
    <div>
        <ul id="command-list">
            <li v-for="command in commands">
              <input v-model="command.enabled" v-on:click="commandEnabled(command)" type="checkbox">
                {{ command.desc }}
            </li>
        </ul>
    </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        commands: [
          {
            id: 0,
            name: 'stream',
            desc: 'Stream music from youtube',
            enabled: false
          },
          {
            id: 1,
            name: 'meme',
            desc: 'Send random meme',
            enabled: true
          }
        ]
      }
    },
    methods: {
      // Change boolean of the command.
      commandEnabled (command) {
        let app = this
        app.loading = true
        command.enabled = !command.enabled
      }
    }

  }
</script>

