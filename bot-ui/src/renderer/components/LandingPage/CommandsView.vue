<template>
    <div id="commands">
        <ul id="command-list">
            <li v-for="command in commands" :key="command.id">
              <div class="cmdcheck cmdcheck-enabled" v-if="command.enabled">
                <input v-on:click="commandEnabled(command)" :id="'cmdcheck' + command.id" class="cmdcheck-enabled" type="checkbox">
                <label :for="'cmdcheck' + command.id">{{ command.desc }}</label>
              </div>
              <div class="cmdcheck cmdcheck-disabled" v-else>
                <input v-on:click="commandEnabled(command)" :id="'cmdcheck' + command.id" class="cmdcheck-disabled" type="checkbox">
                <label :for="'cmdcheck' + command.id">{{ command.desc }}</label>
              </div>
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
    padding: 12px;
  }

  #command-list li {
    padding-bottom: 12px;
  }

  #command-list li:last-child {
    padding-bottom: 0px;
  }

  .cmdcheck input {
    visibility: hidden;
  }

  .cmdcheck-enabled {
    background-color: green;
  }

  .cmdcheck-enabled:hover {
    background-color: rebeccapurple;
  }

  .cmdcheck-disabled {
    background-color: red;
  }

  .cmdcheck-disabled:hover {
    background-color: fuchsia;
  }

</style>