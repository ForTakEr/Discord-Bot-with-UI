<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'bot-ui'
  }
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    background-color: #2C2F33;
    height: 100%;
  }
</style>
