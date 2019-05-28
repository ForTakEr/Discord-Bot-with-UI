<template>
  <div id="app">
    <router-view></router-view>
    <bot></bot>
  </div>
</template>

<script>
  import Bot from './components/Bot.vue'
  export default {
    components: { Bot },
    name: 'bot-ui'
  }
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #D6CBCB;
  }

  a {
    color: #DADADA;
  }

  p {
    color: #DADADA;
  }

  #app {
    background-color: #2C2F33;
    height: 100%;
  }
</style>
