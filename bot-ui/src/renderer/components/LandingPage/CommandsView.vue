<template>
    <div id="commands">
        <ul id="command-list">
            <li v-for="command in commands" :key="command.id"> 
              <input v-model="command.enabled" v-on:click="commandEnabled(command)" :id="'cmdcheck' + command.id" type="checkbox">
              <label :for="'cmdcheck' + command.id">{{ command.desc }}</label>
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

<style>
  #commands {
    margin: 24px;
    background-color: #8cff1a;
  }

  #command-list {
    list-style-type: none;
  }

</style>