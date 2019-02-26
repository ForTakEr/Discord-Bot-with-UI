<template>
    <div>
        <ul id="server-list">
            <li v-for="command in coomands">
                {{ command.name }}
            </li>
        </ul>
    </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        items: [
          { name: 'hello' }
        ]
      }
    }

  }
</script>