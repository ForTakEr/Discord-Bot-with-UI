<template>
    <div>
        <ul id="command-list">
            <li v-for="command in commands">
              <input type="checkbox">
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
            name: 'stream',
            desc: 'Stream music from youtube',
            enabled: false
          },
          {
            name: 'meme',
            desc: 'Send random meme',
            enabled: true
          }
        ]
      }
    }

  }
</script>

