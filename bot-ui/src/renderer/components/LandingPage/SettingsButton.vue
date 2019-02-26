<template>
  <div id="settings">
    <button v-on:click="settingsClick">Settings</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        electron: process.versions.electron,
        name: this.$route.name,
        node: process.versions.node,
        path: this.$route.path,
        platform: require('os').platform(),
        vue: require('vue/package.json').version
      }
    },
    methods: {
      settingsClick: function (event) {
        alert('Hello')
      }
    }
  }
</script>

<style scoped>
  #settings {
    flex: 0 0 65%;
  }
</style>
