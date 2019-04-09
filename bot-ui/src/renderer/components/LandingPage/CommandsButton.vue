<template>
  <div id="commands-button">
    <button v-on:click="settingsClick">Commands</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      settingsClick: function (event) {
        this.$parent.$parent.setCurView('CommandsView')
      }
    }
  }
</script>

<style scoped>
  #commands-button {
    flex: 1;
    margin-top: 16px;
    margin-left: 16px;
  }

  #commands-button button {
    background-color: #7289DA;
    border-radius: 50px;
    border: 1px solid black;
    padding: 2px;
  }
</style>
