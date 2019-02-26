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
        alert('Opened Commands')
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
    background-color: aqua;
    border-radius: 50px;
    border: 1px solid black;
  }

</style>
